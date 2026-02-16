"use client";

import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { dataTestimonials } from "@/data";
import NoteImage from "@/components/note-image";
import TransitionPage from "@/components/transition-page";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />

      <section className="relative flex flex-col justify-center min-h-screen px-4">
        <NoteImage />

        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-8">
          Algunos comentarios
          <span className="block font-bold text-secondary">
            de nuestros clientes
          </span>
        </h1>

        <div className="flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="w-[280px] md:w-[600px] pb-10"
          >
            {dataTestimonials.map(
              ({ id, name, description, imageUrl }) => (
                <SwiperSlide key={id}>
                  <article className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                    
                    <Image
                      src={imageUrl}
                      alt={`Foto de ${name}`}
                      width={100}
                      height={100}
                      className="rounded-full object-cover mb-4"
                    />

                    <h4 className="font-semibold text-lg">{name}</h4>

                    <p className="mt-4 text-sm md:text-base text-gray-300">
                      {description}
                    </p>
                  </article>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
