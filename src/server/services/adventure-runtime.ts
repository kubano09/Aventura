import type { Prisma } from "@prisma/client";
import {
  adventureSchema,
  conditionSchema,
  effectSchema,
  type Adventure,
} from "@/domain/types/adventure";
import { prisma } from "@/server/repositories/prisma-client";

type AdventureWithRelations = Prisma.AdventureVersionGetPayload<{
  include: {
    adventure: true;
    nodes: {
      include: {
        choicesFrom: {
          include: {
            toNode: true;
          };
        };
      };
    };
  };
}>;

function normalizeAdventure(payload: AdventureWithRelations): Adventure {
  const nodes = payload.nodes.map((node) => {
    const sortedChoices = [...node.choicesFrom].sort(
      (left, right) => left.order - right.order,
    );

    return {
      key: node.key,
      title: node.title,
      body: node.body,
      choices: sortedChoices.map((choice) => ({
        key: choice.key,
        label: choice.label,
        targetNodeKey: choice.toNode.key,
        conditions: conditionSchema.parse(choice.conditionsJson ?? {}),
        effects: effectSchema.parse(choice.effectsJson ?? {}),
      })),
    };
  });

  const startNodeKey = nodes[0]?.key ?? "";

  return adventureSchema.parse({
    id: payload.adventure.slug,
    version: payload.version,
    title: payload.titleSnapshot,
    startNodeKey,
    nodes,
  });
}

export async function getPublishedAdventureBySlug(
  slug: string,
  version?: number,
): Promise<Adventure | null> {
  const targetVersion =
    version ??
    (
      await prisma.adventure.findUnique({
        where: { slug },
        select: { latestVersion: true },
      })
    )?.latestVersion;

  if (!targetVersion) {
    return null;
  }

  const payload = await prisma.adventureVersion.findFirst({
    where: {
      adventure: { slug },
      version: targetVersion,
      status: "published",
    },
    include: {
      adventure: true,
      nodes: {
        orderBy: { createdAt: "asc" },
        include: {
          choicesFrom: {
            include: {
              toNode: true,
            },
          },
        },
      },
    },
  });

  if (!payload || payload.nodes.length === 0) {
    return null;
  }

  return normalizeAdventure(payload);
}
