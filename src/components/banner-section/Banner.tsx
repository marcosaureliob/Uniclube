import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import banner from "../../assets/banner.svg";

export default function Banner() {
  return (
    <div className="flex justify-center items-center py-8">
      <button className="bg-[#F47920] z-10 text-white h-16 w-7 rounded-3xl flex items-center justify-center">
        <CaretLeft size={19} className="font-bold" />
      </button>
      <img className="mx-[-15px] z-0" src={banner} />
      <button className="bg-[#F47920] z-10 text-white h-16 w-7 rounded-3xl flex items-center justify-center">
        <CaretRight size={19} className="font-bold" />
      </button>
    </div>
  );
}
