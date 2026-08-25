"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-semibold">Something went wrong</h2>

        <p className="mt-3 text-sm text-white/60">
          We encountered an unexpected error. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}