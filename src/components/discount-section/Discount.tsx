import banner from "../../assets/banner-unimed.svg";
import Card from "../card-discount/Card";
export default function Discount() {
  return (
    <div className="flex justify-center">
      <div
        className=" w-[1196px] h-[530px] mt-36 mb-7 py-10 px-12"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="mb-8">
          <h1 className="text-[30px] text-white">
            Descontos cliente
            <span className="font-semibold">Unimed Natal</span>
          </h1>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
