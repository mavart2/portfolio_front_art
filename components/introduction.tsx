"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className="relative z-10 w-full bg-darkBg/60 pt-16 pb-24">
      <div className="grid items-center h-full p-4 py-16 sm:py-20 md:py-0 md:grid-cols-2 gap-1 md:gap-6">
        <div className="order-2 md:order-none flex justify-center -mt-15 sm:-mt-8 md:mt-0">
          <Image
            src="/mouse.png"
            priority
            width={800}
            height={800}
            alt="Avatar"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 800px"
            className="w-full h-auto mx-auto max-w-[320px] sm:max-w-[420px] md:max-w-full"
          />
        </div>
        <div className="order-1 md:order-none flex flex-col justify-center max-w-md mx-auto md:mx-0 mt-10 md:mt-4 gap-3 md:gap-6">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl">
            Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-[#f5741c]"
            />
          </h1>

          <p className="mx-auto md:mx-0 text-base md:text-xl">
            Como desarrollador frontend y creador de contenido, me dedico a
            combinar diseño y funcionalidad para crear experiencias digitales
            impactantes y accesibles.
          </p>

          <div className="relative z-50 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 md:gap-6">
            <a
              href="/portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-full md:w-auto rounded-xl hover:shadow-lg hover:shadow-white/50 hover:scale-105 block text-center"
            >
              Ver proyectos
            </a>
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
        </div>
      </div>
    </div>
  );
};

export default Introduction;
