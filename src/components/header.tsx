"use client";

import Image from "next/image";
import { LocaleSwitcher } from "./local-switcher";

export const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/MoC_Logo_only_01_1.svg"
            alt="Ministry of Commerce"
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
          <span className="font-semibold text-foreground hidden sm:inline">
            Ministry of Commerce
          </span>
        </div>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};
