import book from "../../assets/categories/Book.svg";
import heart from "../../assets/categories/heart.svg";
import shirt from "../../assets/categories/shirt.svg";
import baby from "../../assets/categories/baby.svg";
import couch from "../../assets/categories/couch.svg";
import dumbell from "../../assets/categories/dumbell.svg";
import mirror from "../../assets/categories/mirror.svg";
import key from "../../assets/categories/key.svg";
import glass from "../../assets/categories/glasses.svg";
import ticket from "../../assets/categories/ticket.svg";

export default function Categories() {
  return (
    <div className="flex justify-center  gap-4 mt-2 mb-16">
      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={book} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">
            Arte, Papelaria e <br /> Armarinhos
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={heart} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">Saúde</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={shirt} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">
            Calçados,
            <br /> Roupas e Bolsas
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={baby} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">Bebês</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={couch} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">
            Casa, Móveis e<br /> Decoração
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={dumbell} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">
            Esportes e<br /> Fitness
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={mirror} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">
            Beleza e<br /> Cuidado Pessoal
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={key} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">Imóveis</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={glass} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">Óculos</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center">
          <img src={ticket} color="white" />
        </div>
        <div>
          <p className="text-center text-[#737373]">Serviços</p>
        </div>
      </div>
    </div>
  );
}
