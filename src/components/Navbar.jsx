"use client";

import Image from "next/image";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const navItems = [
  {
    name: "HOME",
  },
  {
    name: "PRODUCTS",
  },
  {
    name: "MEET CHEF MATT",
  },
  {
    name: "FAQ",
  },
  {
    name: "CONNECT WITH US",
  },
];

const navFooter = [
  {
    name: "CART",
    icon: "/assest/cart.svg",
  },
  {
    name: "WISHLIST",
    icon: "/assest/wishlist.svg",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="w-full h-[28rem] flex-1 flex flex-col justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            {/* <Button variant="outline">{side}</Button> */}
            <Image
              src={"/assest/threedot.svg"}
              alt="three-dot"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="py-8 flex flex-col justify-start"
          >
            <SheetHeader>
              <Image
                src={"/assest/chef-mart.svg"}
                alt="chef-mart"
                width={589}
                height={299}
                className=""
              />
            </SheetHeader>

            <div className="h-full flex flex-col justify-between">
              {/* navbar-items here */}
              <div className="flex flex-col justify-start gap-8 py-4">
                {navItems.map((item, index) => (
                  <h1
                    key={index}
                    className={`text-2xl hover:text-[#D29A5A] cursor-pointer`}
                  >
                    {item.name}
                  </h1>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-[16px] text-[#FFFFFF] leading-[24px] font-normal">
                  TEXT SUPPORT 24/7{" "}
                  <span className="text-[#D29A5A]">070-7782-9137</span>
                </h1>

                <div className="border-b-4 border-b-[#FFFFFF]"></div>

                <div className="flex justify-center items-center gap-4">
                  {navFooter.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center gap-4"
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={36}
                        height={32}
                      />

                      <h1 className="text-[22px] text-[#FFFFFF] leading-[33px] font-normal">
                        {item.name}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Image
          src={"/assest/navbar-sign.svg"}
          alt="chef-mart"
          width={589}
          height={299}
          className=""
        />
      </div>
    </>
  );
};

export default Navbar;
