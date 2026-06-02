export default function Home() {
  return (
    <div className="bg-surface-muted px-gutter py-section-sm text-ink dark:bg-surface-inverse dark:text-ink-inverse flex flex-1 items-center justify-center font-sans">
      <main className="max-w-readable w-full">
        <p className="text-brand-700 dark:text-brand-300 mb-4 text-sm font-medium tracking-wide uppercase">
          Issue #1
        </p>
        <h1 className="text-display-sm text-brand-950 sm:text-display font-semibold">
          Next.js App Router is ready.
        </h1>
        <p className="text-lead text-ink-muted mt-6 dark:text-zinc-300">
          TypeScript, ESLint, Tailwind CSS, and static export support are
          configured for the project baseline.
        </p>
      </main>
    </div>
  );
}
