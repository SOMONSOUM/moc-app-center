"use client";

import {
  Star,
  Download,
  Share2,
  Package,
  Calendar,
  Building2,
  Badge,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const AndroidScreen = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="relative h-32 w-32 shrink-0">
            <Image
              src={"/ios-qr-code.png"}
              alt="sd"
              fill
              className="object-cover rounded-3xl shadow-md"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  MOC Offcer
                </h1>
                <p className="text-muted-foreground text-lg">
                  Ministry of Commerce
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-foreground">4.8</span>
                <span className="text-sm text-muted-foreground">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">4M+</span>
                <span className="text-sm text-muted-foreground">Downloads</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Download className="h-5 w-5" />
              Download APK
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Details Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-2 space-y-6"
        >
          {/* Description */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed">
              Get accurate weather forecasts with real-time updates, severe
              weather alerts, and beautiful visualizations
            </p>
          </Card>

          {/* Screenshots */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={"/ios-qr-code.png"}
                  alt={` screenshot`}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={"/ios-qr-code.png"}
                  alt={` screenshot`}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={"/ios-qr-code.png"}
                  alt={` screenshot`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Card>
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

          {/* Download Card */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-bold text-foreground mb-2">
              Ready to Download?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Click the download button below to get the APK file.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="h-4 w-4 mr-2" />
              Download Now
            </Button>
          </Card>
        </motion.div>
      </section>
    </>
  );
};
