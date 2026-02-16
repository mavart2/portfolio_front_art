import AvatarServices from "@/components/avatar-services";

import ContainerPage from "@/components/container-page";
import NoteImage from "@/components/note-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { FaWhatsapp } from "react-icons/fa";

<NoteImage />;

const ServicesPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <NoteImage />
      <AvatarServices />
      <div className="grid items-center justify-start min-h-[80vh] pl-0 md:pl-24 lg:pl-16 max-w-7xl mx-auto gap-6 px-0 sm:px-6 md:px-10 pt-20 pb-24 md:pb-0 md:grid-cols-2">
        <div className="max-w-full md:max-w-[500px] md:ml-16 lg:ml-24">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-[#f5741c]"> servicios</span>
          </h1>
          <p className="mb-3 text-base text-gray-300 md:text-xl md:mt-20">
            Desarrollo interfaces modernas y escalables enfocadas en experiencia
            de usuario, rendimiento y buenas prácticas. Trabajo con tecnologías
            actuales como React y diseño responsive para construir productos
            digitales atractivos y funcionales.
          </p>
          {/*<button className="px-3 py-2 rounded-lg bg-[#f5741c] hover:bg-[#f5741c]/65">
      Contacta conmigo
    </button>*/}
          <a
            href="https://wa.me/56987114527"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 transition-all border-2 text-md w-full md:w-fit text-[#25D366] border-[#25D366] rounded-xl hover:shadow-lg hover:shadow-[#25D366] hover:scale-105"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
        <div className="w-full overflow-visible">
          <SliderServices />
        </div>
      </div>
    </ContainerPage>
  );
};

export default ServicesPage;
