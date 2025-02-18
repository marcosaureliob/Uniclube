import { useState } from "react";

import baby from "../../assets/categories/baby.svg";
import book from "../../assets/categories/Book.svg";
import couch from "../../assets/categories/couch.svg";
import dumbell from "../../assets/categories/dumbell.svg";
import glass from "../../assets/categories/glasses.svg";
import heart from "../../assets/categories/heart.svg";
import key from "../../assets/categories/key.svg";
import mirror from "../../assets/categories/mirror.svg";
import shirt from "../../assets/categories/shirt.svg";
import ticket from "../../assets/categories/ticket.svg";
import whiteBaby from "../../assets/categories/white-baby.svg";
import whiteBook from "../../assets/categories/white-book.svg";
import whiteCouch from "../../assets/categories/white-couch.svg";
import whiteDumbell from "../../assets/categories/white-dumbell.svg";
import whiteGlass from "../../assets/categories/white-glasses.svg";
import whiteHeart from "../../assets/categories/white-heart.svg";
import whiteKey from "../../assets/categories/white-key.svg";
import whiteMirror from "../../assets/categories/white-mirror.svg";
import whiteShirt from "../../assets/categories/white-shirt.svg";
import whiteTicket from "../../assets/categories/white-ticket.svg";

const categories = [
  { name: "Arte, Papelaria e Armarinhos", icon: book, whiteIcon: whiteBook },
  { name: "Saúde", icon: heart, whiteIcon: whiteHeart },
  { name: "Calçados, Roupas e Bolsas", icon: shirt, whiteIcon: whiteShirt },
  { name: "Bebês", icon: baby, whiteIcon: whiteBaby },
  { name: "Casa, Móveis e Decoração", icon: couch, whiteIcon: whiteCouch },
  { name: "Esportes e Fitness", icon: dumbell, whiteIcon: whiteDumbell },
  { name: "Beleza e Cuidado Pessoal", icon: mirror, whiteIcon: whiteMirror },
  { name: "Serviços", icon: ticket, whiteIcon: whiteTicket },
  { name: "Imóveis", icon: key, whiteIcon: whiteKey },
  { name: "Óculos", icon: glass, whiteIcon: whiteGlass },
];

export default function Categories() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="gap-4 mt-2 grid grid-cols-10 container px-8 mx-auto xl:max-w-[80rem] max-xl:grid-cols-8 max-lg:grid-cols-5 max-md:flex max-md:overflow-x-auto max-md:py-4">
      {categories.map((category, index) => (
        <div className="flex flex-col gap-2 items-center">
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="bg-[#EAE0D5] p-2 w-24 rounded-full h-24 flex justify-center items-center transition-all duration-300 hover:bg-orange-500"
          >
            <img
              src={hoverIndex === index ? category.whiteIcon : category.icon}
              alt={category.name}
              className="w-10 h-10"
            />
          </div>
          <p className="text-center text-[#737373]">{category.name}</p>
        </div>
      ))}
    </div>
  );
}
