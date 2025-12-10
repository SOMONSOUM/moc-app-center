"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Share2, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f1f6f9] via-background   h-[90vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl mb-6">
            Welcome to{" "}
            {/* <span className="bg-gradient-to-b from-[#2980B9] to-[#9dddfc] bg-clip-text text-transparent">MOC Officer</span> */}
            <span className="">MOC Officer</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Discover and download the best Android applications with our curated collection of premium APK files. Fast,
            secure, and easy.
          </p>
          <div className="mx-auto mb-8" >
            <Image
              src={"/ios-qr-code.png"}
              alt="sd"
              width={500}
              height={500}
              className="object-cover rounded-3xl shadow-md w-60 h-60 mx-auto"
            />
            <div className="flex justify-center gap-4 my-6">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-foreground">4.8</span>
                <span className="text-base text-muted-foreground">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground">4M+</span>
                <span className="text-base text-muted-foreground">Downloads</span>
              </div>
            </div>
          </div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Download className="h-6 w-6" />
              Download APK
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}
