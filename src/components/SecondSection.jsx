"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";

const carouselItems = [
  "/assest/second-carousel-1.svg",
  "/assest/second-carousel-2.svg",
  "/assest/second-carousel-3.svg",
  "/assest/second-carousel-4.svg",
  "/assest/second-carousel-5.svg",
];

const SecondSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <>
      <section className="mt-12 relative">
        <Carousel className="w-full relative">
          <CarouselContent>
            {carouselItems.map((src, index) => (
              <CarouselItem
                key={index}
                className={`${index === activeIndex ? "block" : "hidden"}`}
              >
                <div className="relative w-full h-[483px] sm:h-[383px]">
                  <Image
                    src={src}
                    alt={`slider-${index + 1}`}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {activeIndex === 0 && (
            <>
              <div className="absolute top-[5%] flex flex-col justify-center items-center w-full gap-24 sm:gap-16">
                <div className="flex flex-col justify-center items-center gap-4">
                  <h1 className="text-[#130F0C] text-[26px] sm:text-[32px] md:text-[38px] leading-[57px]">
                    ONLINE ONLY
                  </h1>

                  <span className="border-2 border-b-[#D29A5A] w-[76px]"></span>

                  <p className="text-[#130F0C] text-[18px] md:text-[22px] leading-[33px] pt-3 text-center">
                    GET 20% OFF YOUR ORDER OF $50 OR <br /> MORE Use code{" "}
                    <span className="text-[#D29A5A] font-bold">“Chef20”</span>
                  </p>
                </div>

                <Button className="text-[#130F0C] text-[24px] leading-[30.72px] text-center bg-transparent hover:bg-transparent border-2 border-[#D29A5A] py-9 px-12 sm:px-18 md:px-24">
                  Shop Now
                </Button>
              </div>
            </>
          )}

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default SecondSection;
