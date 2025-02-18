import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import banner from "../../assets/banner.svg";
import secondBanner from "../../assets/second-banner.svg";

export default function Banner() {
  const banners = [banner, secondBanner];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto xl:max-w-[80rem] px-8">
      <div
        className="flex justify-center items-center my-8 max-sm:my-4"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <button
          onClick={handlePrev}
          className={`bg-[#F47920] z-10 text-white h-16 w-7 rounded-3xl flex items-center justify-center transition-opacity duration-300 ${
            showButtons ? "opacity-100" : "opacity-0"
          }`}
        >
          <CaretLeft size={19} className="font-bold" />
        </button>
        <img
          className="w-full z-0 transition-opacity duration-500"
          src={banners[currentIndex]}
        />
        <button
          onClick={handleNext}
          className={`bg-[#F47920] z-10 text-white h-16 w-7 rounded-3xl flex items-center justify-center transition-opacity duration-300 ${
            showButtons ? "opacity-100" : "opacity-0"
          }`}
        >
          <CaretRight size={19} className="font-bold" />
        </button>
      </div>
    </div>
  );
}
