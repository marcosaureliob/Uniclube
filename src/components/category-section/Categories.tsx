import { useState } from "react";

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
import whiteBook from "../../assets/categories/white-book.svg";
import whiteHeart from "../../assets/categories/white-heart.svg";
import whiteShirt from "../../assets/categories/white-shirt.svg";
import whiteBaby from "../../assets/categories/white-baby.svg";
import whiteCouch from "../../assets/categories/white-couch.svg";
import whiteDumbell from "../../assets/categories/white-dumbell.svg";
import whiteMirror from "../../assets/categories/white-mirror.svg";
import whiteKey from "../../assets/categories/white-key.svg";
import whiteGlass from "../../assets/categories/white-glasses.svg";
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
    <div className="flex justify-center gap-4 mt-2  flex-wrap">
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
