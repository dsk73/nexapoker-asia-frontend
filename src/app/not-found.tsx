import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-widest text-white/50">404</p>

        <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>

        <p className="mt-3 text-sm text-white/60">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
