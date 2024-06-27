"use client";

import Image from "next/image";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const carouselItems = [
  "/assest/slider-1.svg",
  "/assest/slider-2.jpeg",
  "/assest/slider-3.jpeg",
];

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="w-full relative">
        <Carousel className="w-full relative">
          <CarouselContent>
            {carouselItems.map((src, index) => (
              <CarouselItem
                key={index}
                className={`${index === activeIndex ? "block" : "hidden"}`}
              >
                <div className="relative w-full h-[649px]">
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

          {/* controler buttons */}
          <div
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + carouselItems.length) % carouselItems.length
              )
            }
            className="absolute left-8 top-[50%] cursor-pointer bg-black/60 rounded-full p-2"
          >
            <GrPrevious className="text-3xl font-bold text-[#D29A5A]" />
          </div>

          <div
            onClick={() =>
              setActiveIndex((activeIndex + 1) % carouselItems.length)
            }
            className="absolute right-8 top-[50%] cursor-pointer bg-black/60 rounded-full p-2"
          >
            <GrNext className="text-3xl font-bold text-[#D29A5A]" />
          </div>

          <div className="absolute top-[75%] flex justify-center items-center w-full">
            <Button className="text-[#FFFFFF] text-[24px] leading-[30.72px] text-center bg-transparent hover:bg-transparent border-2 border-white py-9 px-9">
              Meet Chef Matt
            </Button>
          </div>

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

export default CarouselSection;
