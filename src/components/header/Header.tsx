import { MapPin, ShoppingCart, User } from "@phosphor-icons/react";
import Logo from "../../assets/header-logo.svg";

export default function Header() {
  return (
    <div className="bg-[#EAE0D5]">
      <div className="h-2 bg-[#F47920]"></div>
      <div className="flex items-center justify-between gap-8 py-7 container px-8 mx-auto xl:max-w-[80rem] max-lg:flex-col max-lg:gap-4">
        <div>
          <img src={Logo} className="h-9 w-auto" />
        </div>
        <div>
          <input
            className="w-[572px] max-xl:w-[16rem] max-lg:w-[30rem] h-14 rounded-full px-5 py-3 max-sm:w-[20rem]"
            placeholder="O que você gostaria de ver hoje?"
          ></input>
        </div>
        <div className="flex gap-7 max-xl:gap-5 max-xl:flex-1 max-xl:justify-between max-lg:w-[30rem] max-sm:flex-col max-sm:w-[10rem]">
          <div className="flex gap-1 items-center">
            <div className="p-1 bg-[#F7F3EE] rounded-full">
              <MapPin className="text-[#f47920] " size={19} />
            </div>

            <p className="text-[#3F3F3F] text-[16px] font-medium">
              <span className="font-semibold">Onde</span>
              <br />
              você está?
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="p-1 bg-[#F7F3EE] rounded-full">
              <User className="text-[#f47920] " size={19} />
            </div>

            <p className="text-[#3F3F3F] text-[16px] font-medium">
              <span className="font-semibold">Faça login</span>
              <br />
              ou cadastre-se
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="p-1 bg-[#F7F3EE] rounded-full">
              <ShoppingCart className="text-[#f47920] " size={19} />
            </div>

            <p className="text-[#3F3F3F] text-[16px] font-semibold">
              Seu carrinho
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
