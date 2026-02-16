import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import NoteImage from "@/components/note-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";



const PortfolioPage = () => {

    return (
       <ContainerPage> 
        <TransitionPage />
         <AvatarPortfolio /> 
         <NoteImage /> 
    <div className="flex flex-col items-center  justify-center pt-0 md:pt-5 h-auto scale-90 mx-auto ">
<h1 className="text-lg leading-snug text-center md:text-2xl md:mb-3">Mis últimos <span className="font-semibold text-[#f5741c]">trabajos</span></h1>

<div className="grid gap-4 mt-2 mx-auto max-w-4xl sm:grid-cols-2 md:grid-cols-4">{dataPortfolio.map((data) => (<PortfolioBox key={data.id} data={data} />))}
</div>
</div>


        </ContainerPage>
    );
}

export default PortfolioPage;