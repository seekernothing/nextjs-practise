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
    <div className="min-h-screen flex justify-center items-center bg-red-800 ">
      <div className="border rounded-lg p-5 w-1/2 bg-white">
        <h2>Oops soething went wrong</h2>
        <div>
          <p>
            <b>{error?.message}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
