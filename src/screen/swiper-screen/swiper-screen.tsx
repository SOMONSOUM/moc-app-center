"use client";

import type React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  TrendingUp,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

interface CarouselCard {
  id: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const CARDS: CarouselCard[] = [
  {
    id: "1",
    icon: <FileText className="w-12 h-12" />,
    label: "ដូច",
    color: "from-blue-400 to-blue-500",
  },
  {
    id: "2",
    icon: <TrendingUp className="w-12 h-12" />,
    label: "បែងចែកលម្អិត",
    color: "from-green-400 to-green-500",
  },
  {
    id: "3",
    icon: <MessageSquare className="w-12 h-12" />,
    label: "នៅសហការណ៍",
    color: "from-purple-400 to-purple-500",
  },
  {
    id: "4",
    icon: <CheckCircle className="w-12 h-12" />,
    label: "ផ្តល់ឱកាសក្នុងកម្មវិធី",
    color: "from-orange-400 to-orange-500",
  },
  {
    id: "5",
    icon: <CheckCircle className="w-12 h-12" />,
    label: "dfdfdfsdf",
    color: "from-orange-400 to-orange-500",
  },
];

export default function CarouselSection() {
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const handlePrevious = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <div className="w-full py-12 bg-background">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="relative flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute -left-15 z-10 p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Swiper Container */}
          <div className="w-full">
            <Swiper
              onSwiper={handleSwiper}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={16}
              loop={true}
              onSlideChange={handleSlideChange}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
              }}
              className="carousel-swiper"
            >
              {CARDS.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="h-full">
                    <div className="h-full px-4 py-6 border-2 border-dotted border-gray-200 rounded-2xl bg-white hover:border-gray-300 transition-all hover:shadow-md flex flex-col items-center justify-center gap-3 cursor-pointer">
                      {/* Icon Container */}
                      <div
                        className={`p-4 rounded-lg bg-linear-to-br ${card.color} opacity-20`}
                      >
                        <div
                          className={`text-center bg-linear-to-br ${card.color} bg-clip-text text-transparent`}
                        >
                          {card.icon}
                        </div>
                      </div>

                      {/* Label */}
                      <p className="text-center text-sm font-medium text-gray-700 leading-snug">
                        {card.label}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-15 z-10 p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      <style jsx>{`
        :global(.carousel-swiper .swiper-slide) {
          height: auto;
        }
      `}</style>
    </div>
  );
}
