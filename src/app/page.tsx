export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(160deg,#f8f1e6_0%,#f2e6d4_55%,#e8d7be_100%)] text-stone-900">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 md:px-10">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
            Aventura Conversacional
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Base creada para construir una experiencia local, online y cooperativa.
          </h1>
          <p className="max-w-2xl text-lg text-stone-700">
            Este proyecto ya incluye cimientos técnicos, memoria de decisiones,
            roadmap detallado y changelog para mantener continuidad entre sesiones.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-amber-900/20 bg-white/70 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Documentacion operativa</h2>
            <p className="mt-3 text-stone-700">
              Revisa `docs/ROADMAP.md`, `docs/CHANGELOG.md` y
              `docs/SESSION_LOG.md` para continuar exactamente donde se quedo la
              ultima sesion.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-900/20 bg-white/70 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Nucleo preparado</h2>
            <p className="mt-3 text-stone-700">
              Se incluye esquema Prisma inicial, motor narrativo tipado,
              validacion de entorno y estructura modular pensada para escalar.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
