"use client";

import { busSchedule } from "@/data/schedule";
import { formatNumber } from "@/utils/formatNumber";
import ReserveButton from "./ReserveButton";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { IconArrowNarrowRightDashed, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";

function MobileScheduleSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="md:hidden">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          className="mb-4"
        >
          {busSchedule.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="bg-white mx-1 border border-(--black)/10 rounded-2xl h-full">
                <div className="flex flex-col p-3 h-full">
                  {/* Route Header */}
                  <div className="flex flex-col mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        style={{
                          WebkitTextStrokeWidth: 1,
                          WebkitTextStrokeColor: "var(--black)",
                        }}
                        className="text-white opacity-10 font-bold text-xl"
                      >
                        {s.id}
                      </span>
                      <span className="p-1.5 font-p3 bg-[#F5F5F5] border rounded-lg border-[#E3E3E3] text-xs">
                        <span className="opacity-85 font-medium">
                          K {formatNumber(s.fare.toFixed(2))}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="font-medium text-gray-900 text-sm">
                        {s.from}
                      </span>
                      <IconArrowNarrowRightDashed className="opacity-25" />
                      <span className="font-medium text-gray-900 text-sm">
                        {s.destination}
                      </span>
                    </div>
                  </div>

                  {/* Time Info */}
                  <div className="flex flex-col space-y-2 mb-3 bg-gray-50 rounded-lg p-2">
                    <div className="flex justify-between text-xs">
                      <div>
                        <div className="text-gray-500 mb-1">Departure</div>
                        <div className="font-medium text-gray-900">
                          {s.departureTime}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Arrival</div>
                        <div className="font-medium text-gray-900">
                          {s.arrivalTime}
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                        {s.hourDifference}h
                      </span>
                    </div>
                  </div>

                  {/* Bus Stops */}
                  <div className="mb-4 flex-1">
                    <div className="text-xs text-gray-500 mb-2">Bus stops</div>
                    <div className="flex flex-wrap gap-1">
                      {s.busStops.map((stop, index) => (
                        <span
                          key={index}
                          className="inline-flex text-xs items-center px-2 py-1 bg-black/5 border-black/10 border rounded-full"
                        >
                          {stop}
                        </span>
                      ))}
                     
                    </div>
                  </div>

                  {/* Reserve Button */}
                  <div className="border-t border-gray-100 pt-3 mt-auto">
                    <ReserveButton from={s.from} destination={s.destination} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-end">
          <button
            disabled={activeSlide == 0}
            onClick={() => swiperRef.current?.slidePrev()}
            className="disabled:opacity-25 h-8 w-8 items-center justify-center rounded-full hidden"
            aria-label="Previous"
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex justify-center items-center px-1.5 space-x-1">
            {(() => {
              // Calculate how many pagination dots to show based on slides per view
              const totalSlides = busSchedule.length;
              const maxSlideIndex = Math.max(0, totalSlides - slidesPerView);
              const paginationCount =
                slidesPerView >= totalSlides ? 1 : maxSlideIndex + 1;

              return Array.from({ length: paginationCount }, (_, index) => (
                <button
                  key={index}
                  onClick={() => swiperInstance?.slideTo(index)}
                  disabled={!swiperInstance}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border border-black/10 disabled:cursor-not-allowed ${
                    activeSlide === index ? "bg-black/5 w-6" : " w-2.5 "
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ));
            })()}
          </div>
          <button
            disabled={activeSlide == busSchedule.length - 1}
            onClick={() => swiperRef.current?.slideNext()}
            className="disabled:opacity-25 h-8 w-8 items-center justify-center rounded-full hidden"
            aria-label="Next"
          >
            <IconChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileScheduleSwiper;
