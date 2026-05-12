import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const slug = "demo-bosque-susurrante";

  const adventure = await prisma.adventure.upsert({
    where: { slug },
    update: {
      title: "El Bosque Susurrante",
      summary: "Aventura semilla para validar runtime, guardado y editor.",
      latestVersion: 1,
    },
    create: {
      slug,
      title: "El Bosque Susurrante",
      summary: "Aventura semilla para validar runtime, guardado y editor.",
      latestVersion: 1,
    },
  });

  const version = await prisma.adventureVersion.upsert({
    where: {
      adventureId_version: {
        adventureId: adventure.id,
        version: 1,
      },
    },
    update: {
      status: "published",
      titleSnapshot: adventure.title,
      publishedAt: new Date(),
    },
    create: {
      adventureId: adventure.id,
      version: 1,
      status: "published",
      titleSnapshot: adventure.title,
      publishedAt: new Date(),
    },
  });

  const introNode = await prisma.adventureNode.upsert({
    where: {
      adventureVersionId_key: {
        adventureVersionId: version.id,
        key: "intro",
      },
    },
    update: {
      title: "Cruce de caminos",
      body: "Llegas al cruce mientras cae la noche. Hacia el norte, una luz tenue; hacia el este, el sonido de un rio.",
      tags: ["inicio", "exploracion"],
      effectsJson: Prisma.JsonNull,
    },
    create: {
      adventureVersionId: version.id,
      key: "intro",
      title: "Cruce de caminos",
      body: "Llegas al cruce mientras cae la noche. Hacia el norte, una luz tenue; hacia el este, el sonido de un rio.",
      tags: ["inicio", "exploracion"],
    },
  });

  const northNode = await prisma.adventureNode.upsert({
    where: {
      adventureVersionId_key: {
        adventureVersionId: version.id,
        key: "norte",
      },
    },
    update: {
      title: "Claros de piedra",
      body: "Entre piedras antiguas encuentras una llave de hierro cubierta de musgo.",
      tags: ["recurso"],
      effectsJson: {
        addItems: ["llave_hierro"],
      },
    },
    create: {
      adventureVersionId: version.id,
      key: "norte",
      title: "Claros de piedra",
      body: "Entre piedras antiguas encuentras una llave de hierro cubierta de musgo.",
      tags: ["recurso"],
      effectsJson: {
        addItems: ["llave_hierro"],
      },
    },
  });

  const eastNode = await prisma.adventureNode.upsert({
    where: {
      adventureVersionId_key: {
        adventureVersionId: version.id,
        key: "este",
      },
    },
    update: {
      title: "Orilla del rio",
      body: "Junto al rio hay una puerta sellada con marcas antiguas. Necesitas una llave para abrirla.",
      tags: ["bloqueo"],
      effectsJson: Prisma.JsonNull,
    },
    create: {
      adventureVersionId: version.id,
      key: "este",
      title: "Orilla del rio",
      body: "Junto al rio hay una puerta sellada con marcas antiguas. Necesitas una llave para abrirla.",
      tags: ["bloqueo"],
    },
  });

  await prisma.adventureChoice.upsert({
    where: {
      adventureVersionId_fromNodeId_key: {
        adventureVersionId: version.id,
        fromNodeId: introNode.id,
        key: "ir_norte",
      },
    },
    update: {
      toNodeId: northNode.id,
      label: "Seguir la luz del norte",
      order: 1,
      conditionsJson: Prisma.JsonNull,
      effectsJson: Prisma.JsonNull,
    },
    create: {
      adventureVersionId: version.id,
      fromNodeId: introNode.id,
      toNodeId: northNode.id,
      key: "ir_norte",
      label: "Seguir la luz del norte",
      order: 1,
    },
  });

  await prisma.adventureChoice.upsert({
    where: {
      adventureVersionId_fromNodeId_key: {
        adventureVersionId: version.id,
        fromNodeId: introNode.id,
        key: "ir_este",
      },
    },
    update: {
      toNodeId: eastNode.id,
      label: "Acercarte al rio",
      order: 2,
      conditionsJson: Prisma.JsonNull,
      effectsJson: Prisma.JsonNull,
    },
    create: {
      adventureVersionId: version.id,
      fromNodeId: introNode.id,
      toNodeId: eastNode.id,
      key: "ir_este",
      label: "Acercarte al rio",
      order: 2,
    },
  });

  await prisma.adventureChoice.upsert({
    where: {
      adventureVersionId_fromNodeId_key: {
        adventureVersionId: version.id,
        fromNodeId: northNode.id,
        key: "volver_este",
      },
    },
    update: {
      toNodeId: eastNode.id,
      label: "Bajar hacia la orilla",
      order: 1,
      conditionsJson: Prisma.JsonNull,
      effectsJson: Prisma.JsonNull,
    },
    create: {
      adventureVersionId: version.id,
      fromNodeId: northNode.id,
      toNodeId: eastNode.id,
      key: "volver_este",
      label: "Bajar hacia la orilla",
      order: 1,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
