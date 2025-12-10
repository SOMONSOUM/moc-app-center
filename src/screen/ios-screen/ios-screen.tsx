"use client";

import { Copy, ChevronDown, ChevronUp, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

interface AppVersion {
  version: string;
  isExpanded: boolean;
}
const IOSScreen = () => {
  const [versions, setVersions] = useState<AppVersion[]>([
    { version: "1.1.100", isExpanded: true },
    { version: "1.1.099", isExpanded: false },
    { version: "1.1.098", isExpanded: false },
    { version: "1.1.088", isExpanded: false },
  ]);
  const toggleVersion = (index: number) => {
    setVersions((prev) =>
      prev.map((v, i) =>
        i === index ? { ...v, isExpanded: !v.isExpanded } : v
      )
    );
  };

  const handleCopyQR = () => {
    alert("https://moc.gov.kh");
  };
  return (
    <div>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
        <div className="bg-linear-to-b from-[#2980B9] to-[#9dddfc] col-span-1 flex flex-col items-center justify-center gap-6 sm:gap-8 order-2 lg:order-1 lg:sticky lg:top-0 h-auto lg:h-screen overflow-y-auto">
          <Card className="w-full max-w-xs sm:max-w-sm bg-white p-4 sm:p-6 rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 sm:w-5 h-4 sm:h-5 text-gray-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  Open this site in your{" "}
                  <span className="font-semibold text-blue-600">iOS</span>{" "}
                  device
                </p>
              </div>

              {/* QR Code */}
              <div className="bg-white p-3 sm:p-4 border-2 border-gray-200 rounded-lg w-full max-w-xs">
                <Image
                  className="w-full max-w-xs"
                  src="/ios-qr-code.png"
                  alt="iOS App QR Code"
                  width={500}
                  height={500}
                  objectFit="contain"
                />
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopyQR}
                className="flex items-center justify-center w-9 sm:w-10 h-9 sm:h-10 rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <Copy className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
              </button>
            </div>
          </Card>
        </div>

        {/* Right Section - Scrollable */}
        <div className="col-span-1 flex flex-col gap-6 sm:gap-8 order-1 lg:order-2 overflow-y-auto h-screen ">
          {/* Main App Card */}

          {/* App Card */}
          <div className="px-4 lg:px-20">
            <Card className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
              <div className="flex flex-row items-start gap-4 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-linear-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0">
                    <img src="/apple-logo.png" alt="" className="w-10" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      MOC Officer
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Ministry of Commerce
                    </p>
                  </div>
                </div>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 sm:px-4 rounded-lg flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap shrink-0">
                  <Download className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="hidden sm:inline">DOWNLOAD</span> .IPA
                </Button>
              </div>

              {/* App Details */}
              <div className="space-y-3 sm:space-y-4 border-t pt-4 sm:pt-6">
                <div className="flex justify-between py-2 border-b text-xs sm:text-sm">
                  <span className="font-semibold text-gray-600">VERSION</span>
                  <span className="font-semibold text-gray-900">1.1.100</span>
                </div>
                <div className="flex justify-between py-2 border-b text-xs sm:text-sm">
                  <span className="font-semibold text-gray-600">UPDATED</span>
                  <span className="flex items-center gap-1 text-gray-900">
                    3 days ago{" "}
                    <Info className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b text-xs sm:text-sm">
                  <span className="font-semibold text-gray-600">SIZE</span>
                  <span className="font-semibold text-gray-900">49.4 MB</span>
                </div>
                <div className="flex justify-between py-2 border-b text-xs sm:text-sm">
                  <span className="font-semibold text-gray-600">
                    IDENTIFIER
                  </span>
                  <span className="font-semibold text-gray-900 truncate">
                    moc-app.gov.kh
                  </span>
                </div>
                <div className="flex justify-between py-2 text-xs sm:text-sm">
                  <span className="font-semibold text-gray-600">PLATFORM</span>
                  <span className="font-semibold text-gray-900">🍎 iOS</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Version History */}
          <div className="px-4 lg:px-20 pb-10">
            <div className="space-y-2 sm:space-y-3">
              {versions.map((v, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <button
                    onClick={() => toggleVersion(index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                      <span className="text-gray-900 font-semibold text-sm sm:text-base">
                        MOC Officer
                      </span>
                      <span className="text-gray-600 text-xs sm:text-sm truncate">
                        VERSION: {v.version}
                      </span>
                    </div>
                    {v.isExpanded ? (
                      <ChevronUp className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                    )}
                  </button>
                  {v.isExpanded && (
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border-t bg-gray-50 text-xs sm:text-sm text-gray-600">
                      Version {v.version} details and release notes would appear
                      here.
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSScreen;
