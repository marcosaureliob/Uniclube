import { MapPin, ShoppingCart, User } from "@phosphor-icons/react";
import Logo from "../../assets/header-logo.svg";

export default function Header() {
  return (
    <div>
      <div className="h-2 bg-[#F47920]"></div>
      <div className="flex items-center justify-center gap-8 bg-[#EAE0D5] py-7">
        <div>
          <img src={Logo} className="h-9 w-auto" />
        </div>
        <div>
          <input className="w-[572px] h-14 rounded-full px-5 py-3" placeholder="O que você gostaria de ver hoje?"></input>
        </div>
        <div className="flex gap-7">
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
