import caret from "../../assets/Vector.png";
import elipse from "../../assets/elipse.svg";
import group from "../../assets/group.svg";

export default function DropDownMenu() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mt-5 w-full max-w-[1196px] flex-wrap">
        <div className="flex flex-col gap-10 rounded-lg">
          <div className="flex gap-10 flex-wrap justify-center">
            <div className="flex flex-col gap-5 w-48">
              <h1 className="text-[#737373] text-[18px] font-semibold">
                Saúde e Bem-estar
              </h1>
              <div className="flex flex-col gap-5 ml-1 text-[#737373] text-[18px]">
                <p>Beleza</p>
                <p>Cuidados Pessoais</p>
                <p>Esportes e Aventura</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#737373] text-[14px]">Ver mais</p>
                <img src={caret} />
              </div>
            </div>

            <div className="flex flex-col gap-5 w-48">
              <h1 className="text-[#737373] text-[18px] font-semibold">
                Estilo
              </h1>
              <div className="flex flex-col gap-5 ml-1 text-[#737373] text-[18px]">
                <p>Vestuário</p>
                <p>Calçados</p>
                <p>Bijuterias e Acessórios</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#737373] text-[14px]">Ver mais</p>
                <img src={caret} />
              </div>
            </div>

            <div className="flex flex-col gap-5 w-48">
              <h1 className="text-[#737373] text-[18px] font-semibold">
                Eletro
              </h1>
              <div className="flex flex-col gap-5 ml-1 text-[#737373] text-[18px]">
                <p>Eletrodomésticos</p>
                <p className="line-clamp-1">Celulares, Tablets e Acessórios</p>
                <p>Câmeras e Acessórios</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#737373] text-[14px]">Ver mais</p>
                <img src={caret} />
              </div>
            </div>
          </div>

          <div className="flex gap-10 flex-wrap justify-center">
            <div className="flex flex-col gap-5 w-48">
              <h1 className="text-[#737373] text-[18px] font-semibold">Casa</h1>
              <div className="flex flex-col gap-5 ml-1 text-[#737373] text-[18px]">
                <p>Casa, Jardim e Limpeza</p>
                <p>Móveis e Decoração</p>
                <p>Construção</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#737373] text-[14px]">Ver mais</p>
                <img src={caret} />
              </div>
            </div>

            <div className="flex flex-col gap-5 w-48">
              <h1 className="text-[#737373] text-[18px] font-semibold">
                Tincidunt
              </h1>
              <div className="flex flex-col gap-5 ml-1 text-[#737373] text-[18px]">
                <p>Tempor</p>
                <p>Consequat</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#737373] text-[14px]">Ver mais</p>
                <img src={caret} />
              </div>
            </div>

            <div className="flex flex-col gap-5 w-48">
              <h1 className="text-[#737373] text-[18px] font-semibold">
                Ipsum Lorem
              </h1>
              <div className="flex flex-col gap-5 ml-1 text-[#737373] text-[18px]">
                <p>Sit Amet</p>
                <p>Consequant</p>
                <p>Pellentesque</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#737373] text-[14px]">Ver mais</p>
                <img src={caret} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-48 ml-5 sm:ml-20">
          <h1 className="text-[#737373] text-[18px] font-semibold">
            Mais Departamentos
          </h1>
          <div className="flex flex-col gap-5 ml-1 text-[#737373] text-[18px]">
            <p>Petshop</p>
            <p>Produtos Regionais</p>
            <p>Brinquedos e Jogos</p>
            <p>Livros</p>
            <p>Música e Hobbies</p>
            <p>Bebês</p>
            <p>Alimentos e Bebidas</p>
            <p>Agro e Indústria</p>
          </div>
          <p className="text-[#737373] text-[14px]">
            Ver todos os departamentos
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-9 p-10 gap-6 rounded-b-lg">
        <div className="flex flex-col gap-2 items-center">
          <img src={elipse} />
          <p className="text-[#737373] text-[18px]">
            Lorem <br /> Ipsum
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={elipse} />
          <p className="text-[#737373] text-[18px]">
            Lorem <br /> Ipsum
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={elipse} />
          <p className="text-[#737373] text-[18px]">
            Lorem <br /> Ipsum
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={elipse} />
          <p className="text-[#737373] text-[18px]">
            Lorem <br /> Ipsum
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={elipse} />
          <p className="text-[#737373] text-[18px]">
            Lorem <br /> Ipsum
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={elipse} />
          <p className="text-[#737373] text-[18px]">
            Lorem <br /> Ipsum
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={elipse} />
          <p className="text-[#737373] text-[18px]">
            Lorem <br /> Ipsum
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={group} />
        </div>
      </div>
    </div>
  );
}
