import banner from "../../assets/banner-unimed.svg";
import Card from "../card-discount/Card";
export default function Discount() {
  return (
    <div className="container mx-auto xl:max-w-[80rem] px-8">
      <div
        className="w-full mt-20 mb-20 py-10 px-12"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="mb-8">
          <h1 className="text-[30px] text-white">
            Descontos cliente{" "}
            <span className="font-semibold">Unimed Natal</span>
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-3 max-xl:gap-y-16 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <Card />
        </div>
      </div>
    </div>
  );
}
