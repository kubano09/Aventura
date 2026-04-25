import { PrismaClient } from "@prisma/client";

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

  const introNode = await prisma.adventureNode.create({
    data: {
      adventureVersionId: version.id,
      key: "intro",
      title: "Cruce de caminos",
      body: "Llegas al cruce mientras cae la noche. Hacia el norte, una luz tenue; hacia el este, el sonido de un rio.",
      tags: ["inicio", "exploracion"],
    },
  });

  const northNode = await prisma.adventureNode.create({
    data: {
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

  const eastNode = await prisma.adventureNode.create({
    data: {
      adventureVersionId: version.id,
      key: "este",
      title: "Orilla del rio",
      body: "Junto al rio hay una puerta sellada con marcas antiguas. Necesitas una llave para abrirla.",
      tags: ["bloqueo"],
    },
  });

  await prisma.adventureChoice.createMany({
    data: [
      {
        adventureVersionId: version.id,
        fromNodeId: introNode.id,
        toNodeId: northNode.id,
        key: "ir_norte",
        label: "Seguir la luz del norte",
        order: 1,
      },
      {
        adventureVersionId: version.id,
        fromNodeId: introNode.id,
        toNodeId: eastNode.id,
        key: "ir_este",
        label: "Acercarte al rio",
        order: 2,
      },
      {
        adventureVersionId: version.id,
        fromNodeId: northNode.id,
        toNodeId: eastNode.id,
        key: "volver_este",
        label: "Bajar hacia la orilla",
        order: 1,
      },
    ],
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
