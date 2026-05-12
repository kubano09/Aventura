import { NextResponse } from "next/server";
import { seedAdventure } from "@/features/runtime/seed-adventure";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const { searchParams } = new URL(request.url);
  const versionValue = searchParams.get("version");
  const parsedVersion = versionValue ? Number(versionValue) : undefined;

  try {
    const { getPublishedAdventureBySlug } = await import(
      "@/server/services/adventure-runtime"
    );
    const adventure = await getPublishedAdventureBySlug(slug, parsedVersion);

    if (adventure) {
      return NextResponse.json(adventure, { status: 200 });
    }
  } catch {
    return NextResponse.json(
      {
        code: "ADVENTURE_FETCH_FAILED",
        message: "No se pudo cargar aventura publicada.",
        fallback: seedAdventure,
      },
      { status: 200 },
    );
  }

  if (slug === "demo-bosque-susurrante") {
    return NextResponse.json(seedAdventure, { status: 200 });
  }

  return NextResponse.json(
    {
      code: "ADVENTURE_NOT_FOUND",
      message: `Aventura no encontrada: ${slug}`,
    },
    { status: 404 },
  );
}
