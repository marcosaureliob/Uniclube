import bolsa from "../../assets/card-banners/bolsa.svg";
import boneca from "../../assets/card-banners/boneca.svg";
import galinha from "../../assets/card-banners/galinha.svg";
import garrafa from "../../assets/card-banners/garrafa.svg";
import vaso from "../../assets/card-banners/vaso.svg";

import heart from "../../assets/card-banners/wishlist.svg";

export default function Card() {
  return (
    <>
      <div className="mx-auto">
        <div
          className="w-52 h-48 rounded-t-md flex justify-end items-end p-3"
          style={{ backgroundImage: `url(${garrafa})` }}
        >
          <img src={heart} className="w-7 h-7" />
        </div>
        <div className="bg-white py-4 px-4 w-52 rounded-b-md">
          <h1 className="text-[18px] text-[#3f3f3f] mb-4">
            Garrafa de areia colorida
          </h1>

          <div className="flex gap-2 items-center mb-0.5">
            <p className="line-through text-[14px] text-[#737373]">R$ 32,90</p>
            <p className="line-through text-[12px] text-[#CC0A12]">10% OFF</p>
          </div>

          <p className="text-[#3f3f3f] font-semibold text-[26px] mb-2.5">
            R$ 29,61
          </p>

          <p className="text-[14px] font-semibold text-[#737373] mb-4">
            3x R$ 6,33 sem juros no cartão <br />
            ou R$ 18,50 no pix
          </p>

          <p className="text-[14px] text-[#737373]">
            Vendido por <span className="underline">Sr. Castanha</span>
          </p>
        </div>
      </div>

      <div className="mx-auto">
        <div
          className="w-52 h-48 rounded-t-md flex justify-end items-end p-3"
          style={{ backgroundImage: `url(${bolsa})` }}
        >
          <img src={heart} className="w-7 h-7" />
        </div>
        <div className="bg-white py-4 px-4 w-52 rounded-b-md">
          <h1 className="text-[18px] text-[#3f3f3f] mb-4">
            Bolsas variadas de fibra de Açaí
          </h1>

          <div className="flex gap-2 items-center mb-0.5">
            <p className="text-[14px] text-[#737373]">A partir de</p>
          </div>

          <p className="text-[#3f3f3f] font-semibold text-[26px] mb-2.5">
            R$ 49,90
          </p>

          <p className="text-[14px] font-semibold text-[#737373] mb-4">
            2x R$ 24,95 sem juros no cartão <br />
            ou R$ 30,50 no pix
          </p>

          <p className="text-[14px] text-[#737373]">
            Vendido por <span className="underline">Dandara</span>
          </p>
        </div>
      </div>

      <div className="mx-auto">
        <div
          className="w-52 h-48 rounded-t-md flex justify-end items-end p-3"
          style={{ backgroundImage: `url(${galinha})` }}
        ></div>
        <div className="bg-white py-4 px-4 w-52 rounded-b-md">
          <h1 className="text-[18px] text-[#3f3f3f] mb-4">
            Galinha e pintinhos de barro feitas a mão
          </h1>

          <div className="flex gap-2 items-center mb-0.5">
            <p className="line-through text-[14px] text-[#737373]">R$ 32,90</p>
            <p className="line-through text-[12px] text-[#CC0A12]">10% OFF</p>
          </div>

          <p className="text-[#3f3f3f] font-semibold text-[26px] mb-2.5">
            R$ 14,90
          </p>

          <p className="text-[14px] font-semibold text-[#737373] mb-4 h-[42px]">
            ou R$ 13,00 no pix
          </p>

          <p className="text-[14px] text-[#737373]">
            Vendido por <span className="underline">Patrícia Arte</span>
          </p>
        </div>
      </div>

      <div className="mx-auto">
        <div
          className="w-52 h-48 rounded-t-md flex justify-end items-end p-3"
          style={{ backgroundImage: `url(${vaso})` }}
        ></div>
        <div className="bg-white py-4 px-4 w-52 rounded-b-md">
          <h1 className="text-[18px] text-[#3f3f3f] mb-4 line-clamp-2">
            Panelas de barro de São Gonçado do Amarante
          </h1>

          <div className="flex gap-2 items-center mb-0.5">
            <p className="line-through text-[14px] text-[#737373]">Apenas</p>
          </div>

          <p className="text-[#3f3f3f] font-semibold text-[26px] mb-2.5">
            R$ 29,90
          </p>

          <p className="text-[14px] font-semibold text-[#737373] mb-4 h-[42px]">
            2x de 16,95 no cartão <br />
            ou R$ 123,90 no pix
          </p>

          <p className="text-[14px] text-[#737373] line-clamp-1">
            Vendido por <span className="underline">Sebastião Salgado</span>
          </p>
        </div>
      </div>

      <div className="mx-auto">
        <div
          className="w-52 h-48 rounded-t-md flex justify-end items-end p-3"
          style={{ backgroundImage: `url(${boneca})` }}
        ></div>
        <div className="bg-white py-4 px-4 w-52 rounded-b-md">
          <h1 className="text-[18px] text-[#3f3f3f] mb-4 line-clamp-2">
            Artesanato de bonecas negras feitas com cabaça
          </h1>

          <div className="flex gap-2 items-center mb-0.5">
            <p className="line-through text-[14px] text-[#737373]">
              A partir de
            </p>
          </div>

          <p className="text-[#3f3f3f] font-semibold text-[26px] mb-2.5">
            R$ 9,90
          </p>

          <p className="text-[14px] font-semibold text-[#737373] mb-4 h-[42px]">
            ou 2x de 16,95 no cartão
          </p>

          <p className="text-[14px] text-[#737373]">
            Vendido por <span className="underline">Manu Intimates</span>
          </p>
        </div>
      </div>
    </>
  );
}
