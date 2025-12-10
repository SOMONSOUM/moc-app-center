"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              APK
            </div>
            <span className="text-xl font-bold hidden sm:inline">
              APK Store
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
