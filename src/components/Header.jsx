import Link from "next/link";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <>
      <header className="text-white relative">
        {/* desktop nav & hire me button */}
        <div className="absolute top-0 left-0 z-20 w-[8rem] h-[40.6rem] bg-black/60 border-r-8 border-r-[#D29A5A]">
          <Navbar />
        </div>

        <div className="relative z-10">
          <Carousel />
        </div>
      </header>
    </>
  );
};

export default Header;
