"use client";
import React from 'react'
import { Copy, ChevronDown, ChevronUp, Download, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from 'react';
import Image from 'next/image';

interface AppVersion {
  version: string
  isExpanded: boolean
}
const IOSScreen = () => {
  const [versions, setVersions] = useState<AppVersion[]>([
    { version: "1.1.100", isExpanded: true },
    { version: "1.1.099", isExpanded: false },
    { version: "1.1.098", isExpanded: false },
    { version: "1.1.088", isExpanded: false },
  ])
  const toggleVersion = (index: number) => {
    setVersions((prev) => prev.map((v, i) => (i === index ? { ...v, isExpanded: !v.isExpanded } : v)))
  }

  const handleCopyQR = () => {
    alert("QR Code copied!")
  }
  return (
    <div>


      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
        {/* Left Section - Fixed on large screens */}
        <div className="bg-[#E7F7FF] col-span-1 flex flex-col items-center justify-center gap-6 sm:gap-8 order-2 lg:order-1 lg:sticky lg:top-0 h-auto lg:h-screen overflow-y-auto">
          <Card className="w-full max-w-xs sm:max-w-sm bg-white p-4 sm:p-6 rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 sm:w-5 h-4 sm:h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700">
                  Open this site in your <span className="font-semibold text-blue-600">iOS</span> device
                </p>
              </div>

              {/* QR Code */}
              <div className="bg-white p-3 sm:p-4 border-2 border-gray-200 rounded-lg w-full max-w-xs">
                <svg
                  className="w-40 sm:w-48 h-40 sm:h-48 mx-auto"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="200" height="200" fill="white" />
                  {/* Simplified QR code pattern */}
                  <rect x="20" y="20" width="40" height="40" fill="black" />
                  <rect x="30" y="30" width="20" height="20" fill="white" />
                  <rect x="140" y="20" width="40" height="40" fill="black" />
                  <rect x="150" y="30" width="20" height="20" fill="white" />
                  <rect x="20" y="140" width="40" height="40" fill="black" />
                  <rect x="30" y="150" width="20" height="20" fill="white" />
                  {[...Array(100)].map((_, i) => (
                    <rect
                      key={i}
                      x={Math.random() * 200}
                      y={Math.random() * 200}
                      width="2"
                      height="2"
                      fill={Math.random() > 0.5 ? "black" : "white"}
                    />
                  ))}
                </svg>
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

          {/* Apps Platform Badge */}
          {/* <div className="mt-4 sm:mt-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg flex flex-col items-center gap-2">
            <span className="text-xs font-semibold text-gray-600">APPS PLATFORM</span>
            <span className="text-xs sm:text-sm font-semibold text-blue-600">iOS</span>
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg border-2 border-blue-500 flex items-center justify-center bg-blue-50">
              <img src="/apple-logo.png" alt="" className="w-5" />
            </div>
          </div> */}
        </div>

        {/* Right Section - Scrollable */}
        <div className="col-span-1 flex flex-col gap-6 sm:gap-8 order-1 lg:order-2 overflow-y-auto h-screen ">
          {/* Main App Card */}
          <div className="bg-[#2980B9] px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="/moclogo.png" alt="" className="w-60" />
              </div>
            </div>
          </div>

          {/* App Card */}
          <div className="px-4 lg:px-20">
            <Card className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <img src="/apple-logo.png" alt="" className="w-10" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">MOC</h2>
                    <p className="text-xs sm:text-sm text-gray-600">MOC</p>
                  </div>
                </div>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 sm:px-4 rounded-lg flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap flex-shrink-0">
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
                    3 days ago <Info className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b text-xs sm:text-sm">
                  <span className="font-semibold text-gray-600">SIZE</span>
                  <span className="font-semibold text-gray-900">49.4 MB</span>
                </div>
                <div className="flex justify-between py-2 border-b text-xs sm:text-sm">
                  <span className="font-semibold text-gray-600">IDENTIFIER</span>
                  <span className="font-semibold text-gray-900 truncate">moc-app.gov.kh</span>
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
                <Card key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <button
                    onClick={() => toggleVersion(index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                      <span className="text-gray-900 font-semibold text-sm sm:text-base">MOC</span>
                      <span className="text-gray-600 text-xs sm:text-sm truncate">VERSION: {v.version}</span>
                    </div>
                    {v.isExpanded ? (
                      <ChevronUp className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                    )}
                  </button>
                  {v.isExpanded && (
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border-t bg-gray-50 text-xs sm:text-sm text-gray-600">
                      Version {v.version} details and release notes would appear here.
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default IOSScreen