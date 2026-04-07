import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full max-w-3xl px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">About Us</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Welcome to the About Us page! Here you can learn more about our mission and values.
        </p>
        <Link href="/">
          Back to Home
        </Link>
      </main>
    </div>
  );
}