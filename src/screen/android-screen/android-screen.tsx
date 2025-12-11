"use client";

import {
  Star,
  Download,
  Share2,
  Package,
  Calendar,
  Building2,
  Badge,
  Bookmark,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const AndroidScreen = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
      >
       
        <div className="flex gap-6 items-start">
          <div className="relative h-32 w-32 lg:h-32 lg:w-32 shrink-0">
            <Image
              src={"/MoC_Logo_only_01_1.svg"}
              alt="MOC Officer"
              fill
              className="object-cover rounded-2xl shadow-sm"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
              MOC Officer
            </h1>
            <p className="text-primary mb-6">
              Ministry of Commerce
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-sm font-semibold">4.8</span>
                  <Star className="h-3 w-3 fill-current" />
                </div>
                <p className="text-xs text-muted-foreground">70.5K reviews</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold mb-1">4M+</p>
                <p className="text-xs text-muted-foreground">Downloads</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center border rounded px-2 py-0.5 mb-1">
                  <span className="text-xs font-semibold">3+</span>
                </div>
                <p className="text-xs text-muted-foreground">Rated for 3+</p>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 py-5">
          <Button
            size="lg"
            className=" bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Now
          </Button>
          <button className="flex items-center gap-2 text-primary text-sm font-medium">
            <Share2 className="h-4 w-4" />
            Share
          </button>
          <button className="flex items-center gap-2 text-primary text-sm font-medium">
            <Bookmark className="h-4 w-4" />
            Add to wishlist
          </button>
        </div>
        <div className="mt-6 pt-4 border-t text-sm text-muted-foreground flex items-center gap-2">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          <span>This app is available for all of IOS devices</span>
        </div>
      </motion.div>

      {/* Details Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-2 space-y-6"
        >
          <Carousel className="w-full ">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/4 sm:basis-1/4 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
                  <div className="">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="relative h-60 sm:h-80"
                    >
                      <Image
                        src={`/covers/cover-app-${index + 1}.png`}
                        alt="QR screenshot"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent >
            <CarouselPrevious className="ml-8" />
            <CarouselNext className="mr-8" />
          </Carousel>
          {/* Description */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed">
              Get accurate weather forecasts with real-time updates, severe
              weather alerts, and beautiful visualizations
            </p>
          </Card>

          {/* Screenshots */}

        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-4"
        >
          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-4">App Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge>dasd</Badge>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Package className="h-4 w-4" />
                  <span>Version 1.0.0.0</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Download className="h-4 w-4" />
                  <span>24MB</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>12/1/2024</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span>MOC Officer App</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>
    </>
  );
};
