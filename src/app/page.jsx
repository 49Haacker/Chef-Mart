import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  return (
    <>
      <div className="h-full pl-8 sm:pl-20 md:pl-32 mt-12">
        <FirstSection />

        <SecondSection />

        <ThirdSection />

        <Footer />
      </div>
    </>
  );
}
