"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Welcome to{" "}
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              APK Store
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Discover and download the best Android applications with our curated
            collection of premium APK files. Fast, secure, and easy.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Download className="h-5 w-5" />
              Explore Apps
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted bg-transparent"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};
