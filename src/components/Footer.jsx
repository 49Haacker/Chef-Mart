"use client";

import Image from "next/image";

const footerItem = [
  {
    icon: "/assest/vector.svg",
    heading: "FREE SHIPPING WORLDWIDE",
    para: "Guaranteed Delivery",
  },
  {
    icon: "/assest/head-phone.svg",
    heading: "24/7 CUSTOMER SERVICE",
    para: "Text Us 24/7 at 070-7782-9137",
  },
  {
    icon: "/assest/quality.svg",
    heading: "QUALITY GUARANTEE!",
    para: "Send Within 30 Days",
  },
];

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {footerItem.map((item, index) => (
            <div key={index} className="flex gap-8">
              <Image src={item.icon} alt="vector" width={36} height={32} />

              <span className="flex flex-col justify-start mt-8">
                <h1 className="text-[#D29A5A] text-[24px] font-normal leading-[36px]">
                  {item.heading}
                </h1>

                <p className="text-[#FFFFFF] text-[18px] font-normal leading-[27px]">
                  {item.para}
                </p>
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#D29A5A] w-full h-[8px] mt-12"></div>

        <div className="w-full flex justify-center items-center">
          <Image
            src={"/assest/chef-mart.svg"}
            alt="chef-mart"
            width={447}
            height={299}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
