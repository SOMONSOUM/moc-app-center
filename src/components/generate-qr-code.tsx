"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

export const GenerateQrCode: React.FC = () => {
  return (
    <div>
      <div className="flex-1 flex-col items-center justify-center  hidden md:flex">
        <div className="w-full max-w-md text-center">
          <div className="flex items-center justify-center mb-10">
            <div className="p-2 border-2 rounded-xl border-primary/40 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-colors">
              <div className="p-2 rounded-xl">
                <div className="relative">
                  <QRCodeSVG value="https://google.com" size={300} level="H" />
                  <Image
                    fetchPriority="high"
                    src="/MoC_Logo_only_01_1.svg"
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                    alt="moc-logo"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center md:hidden">
        <div className="w-full max-w-md text-center">
          <div className="flex items-center justify-center mb-10">
            <div className="p-2 border-2 rounded-xl border-primary/40 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-colors">
              <div className="p-2 rounded-xl">
                <div className="relative">
                  <QRCodeSVG value="https://google.com" size={250} level="H" />
                  <Image
                    fetchPriority="high"
                    src="/MoC_Logo_only_01_1.svg"
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                    alt="moc-logo"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
