"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleSwitcher } from "./local-switcher";

export const Header = () => {
  return (
    <nav className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <Image
            src="/moc-logo.svg"
            alt="Ministry of Commerce"
            width={160}
            height={160}
            priority
          />
        </Link>

        <LocaleSwitcher />
      </div>
    </nav>
  );
};
