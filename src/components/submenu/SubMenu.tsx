import { useState } from "react";
import e from "../../assets/e.svg";

import { CaretDown, List } from "@phosphor-icons/react";
import DropDownMenu from "../drop-down-menu/DropDownMenu";

export default function SubMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F7F3EE]">
      <div className="flex justify-between items-center py-4 gap-7 container px-8 mx-auto xl:max-w-[80rem] max-sm:flex-col">
        <div className="flex gap-6 max-sm:flex-col max-sm:items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <List color="#F47920" size={20} />
            <p className="text-base font-semibold text-[#3F3F3F]">
              Departamentos
            </p>
            <CaretDown color="#F47920" size={20} />
          </div>
          <div className="flex items-center gap-2">
            <img src={e} alt="e" className="mt-[-4px]" />
            <p className="text-base font-medium text-[#3F3F3F]">
              Descontos Cliente Unimed Natal
            </p>
          </div>
        </div>
        <div className="text-[#737373] text-[16px]">Venda no Uniclube</div>
      </div>
      {isOpen && <DropDownMenu />}
    </div>
  );
}
