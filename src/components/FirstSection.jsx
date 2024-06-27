"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// import images here
import cinnamon_honey from "../../public/assest/cinnamon-honey.svg";
import coconut_oil from "../../public/assest/coconut-oil.svg";
import mango_honey from "../../public/assest/mango-honey.svg";
import honey_habanero from "../../public/assest/honey-habanero.svg";
import green from "../../public/assest/green.svg";

const carouselItems = [
  {
    brand_name: "CINNAMON HONEY",
    old_price: "12.00",
    new_price: "9.00",
    url: cinnamon_honey,
  },
  {
    brand_name: "COCONUT OIL",
    old_price: "20.00",
    new_price: "15.00",
    url: coconut_oil,
  },
  {
    brand_name: "MANGO HONEY",
    old_price: "9.00",
    new_price: "6.00",
    url: mango_honey,
  },
  {
    brand_name: "HONEY HABANERO",
    old_price: "12.00",
    new_price: "9.00",
    url: honey_habanero,
  },
];

const FirstSection = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8 relative">
        <div className="absolute -top-36">
          <Image src={green} alt="green image" className="opacity-100 z-0" />
        </div>

        <div className="w-full sm:w-[65%] lg:w-[50%] xl:w-[35%] mt-20 z-10 flex flex-col gap-2">
          <h1 className="text-[#D29A5A] text-[38px] leading-[57px] font-normal">
            CHEF MATT PRODUCTS
          </h1>

          <div className="border-b-4 border-b-[#D29A5A]"></div>

          <p className="text-[#FFFFFF] text-[18px] leading-[27px] font-normal pt-8">
            Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it
            yourself and Thank us later.
          </p>
        </div>

        <div className="w-full relative">
          <Carousel className="w-full">
            <CarouselContent className="flex">
              {carouselItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={`pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center items-center`}
                >
                  <div className="px-8 sm:px-14">
                    <Image
                      src={item.url}
                      alt={item.name}
                      className="w-[234px] h-[234px] object-cover"
                    />
                    <div className="flex flex-col gap-4">
                      <h1 className="text-[#D29A5A] text-[18px] leading-[27px] text-center">
                        {item.brand_name}
                      </h1>

                      <p className="flex justify-center gap-4 text-[#FFFFFF] text-[14px] leading-[21px]">
                        <span className="line-through">{item.old_price}</span>
                        <span>{item.new_price}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2 sm:left-8 top-[35%] cursor-pointer bg-transparent rounded-full p-2" />
            <CarouselNext className="absolute right-2 sm:right-8 top-[35%] cursor-pointer bg-transparent rounded-full p-2" />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
