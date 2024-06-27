"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ThirdSection = () => {
  return (
    <>
      <div className="mt-12 relative">
        <div className="relative w-full h-[553px] sm:h-[383px]">
          <Image
            src={"/assest/signup-special.svg"}
            alt={`signup-special`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute top-[10%] left-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#FFFFFF] text-[38px] leading-[57px] font-normal">
              SIGN UP SPECIAL PROMOTIONS
            </h1>
            <span className="border-b-2 border-b-[#FFFFFF]"></span>

            <p className="text-[#FFFFFF] text-[18px] leading-[27px] font-normal pt-8">
              Get exclusive deals you won’t find anywhere else straight to your
              inbox!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-8">
            <Input
              placeholder="Enter email address"
              className="border-2 border-[#D29A5A] bg-black/60 p-4 outline-none my-8"
            />

            <Button className="bg-[#D29A5A] hover:bg-[#d49247] text-[#FFFFFF] text-base w-[35%] sm:w-auto">
              Suscribes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
