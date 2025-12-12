"use client";

import { useState } from "react";
import {
  Star,
  Download,
  Share2,
  Package,
  Calendar,
  Building2,
  Badge,
  Bookmark,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AndroidScreen = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    "/covers/cover-app-1.png",
    "/covers/cover-app-2.png",
    "/covers/cover-app-3.png",
    "/covers/cover-app-4.png",
    "/covers/cover-app-5.png",
    "/covers/cover-app-6.png",
  ];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : null
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) =>
      prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : null
    );
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;

    if (e.key === "ArrowLeft") {
      setSelectedImage((prev) =>
        prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : null
      );
    } else if (e.key === "ArrowRight") {
      setSelectedImage((prev) =>
        prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : null
      );
    } else if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

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
              Ministry of Commerce. (Cambodia)
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
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 py-5">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Now
          </Button>
          <button className="flex items-center gap-2 text-primary text-sm font-medium">
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>
        <div className="mt-6 pt-4 border-t text-sm text-muted-foreground flex items-center gap-2">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          <span>This app is available for all of android devices</span>
        </div>
      </motion.div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-2 space-y-6"
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/4 sm:basis-1/4 md:basis-1/4 lg:basis-1/4 xl:basis-1/5"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative h-60 sm:h-80 cursor-pointer group overflow-hidden border-gray-200 hover:border-primary transition-all duration-300"
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`cover-${index + 1}`}
                      fill
                      className="object-contain "
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-8" />
            <CarouselNext className="mr-8" />
          </Carousel>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed">
              Get accurate weather forecasts with real-time updates, severe
              weather alerts, and beautiful visualizations
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-4"
        >
          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-4">App Info</h3>
            <div className="space-y-4">
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

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors text-white"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={handlePrevImage}
              className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors text-white hidden sm:flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-lg max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={`/covers/cover-app-${selectedImage + 1}.png`}
                  alt={`Screenshot ${selectedImage + 1}`}
                  width={400}
                  height={800}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedImage + 1} / {images.length}
              </div>

              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 sm:hidden">
                <button
                  onClick={handlePrevImage}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>

            <button
              onClick={handleNextImage}
              className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors text-white hidden sm:flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
