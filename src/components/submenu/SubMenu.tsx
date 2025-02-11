import e from "../../assets/e.svg";

import { CaretDown, List } from "@phosphor-icons/react";

export default function SubMenu() {
  return (
    <div className="flex justify-between items-center bg-[#F7F3EE] py-4 px-32 gap-7">
      <div className="flex gap-6">
        <div className="flex  items-center gap-2">
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
  );
}
