export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-24 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="w-full max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Issue #1
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Next.js App Router is ready.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          TypeScript, ESLint, Tailwind CSS, and static export support are
          configured for the project baseline.
        </p>
      </main>
    </div>
  );
}
