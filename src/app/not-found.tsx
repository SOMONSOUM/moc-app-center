"use client";

export const metadata = {
  title: "404: Not Found",
  description: "The page you are looking for is not here.",
};

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-[7rem] font-bold leading-tight">404</h1>
      <span className="font-medium">404: Not Found</span>
      <p className="text-center text-muted-foreground">
        The page you are looking for is not here.
      </p>
      <div className="mt-6 flex gap-4">
        <Button onClick={() => (window.location.href = "/")}>Home</Button>
      </div>
    </div>
  );
}
