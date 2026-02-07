"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { contentData } from "../data/texts";
import CarouselNavButton from "./CarouselNavButton";


const clients = [
  { name: "ALD", logo: "/clients/ald.svg" },
  {name: "ARCOR", logo: "/clients/arcor.svg"},
  {name: "ECS", logo: "/clients/ecs.svg"},
  {name: "KHS", logo: "/clients/khs.svg"},
  {name: "TIROLEZ", logo: "/clients/tirolez.svg"},
  {name: "TWM", logo: "/clients/twm.svg"},
]

export default function Clients() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight font-bold text-primary text-center`}>
          {contentData.clients.heading}
        </h2>
        <div className="mt-12 relative">
          <CarouselNavButton direction="prev" ariaLabel="Previous clients" />

          <div className="px-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !w-2 !h-2 !bg-gray-300 !opacity-100",
                bulletActiveClass: "!bg-secondary",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
              }}
              className="pb-12!"
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index} className="py-4">
                  <div className="flex items-center justify-center h-24 w-full transition-transform duration-300 hover:-translate-y-2">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <CarouselNavButton direction="next" ariaLabel="Next clients" />
        </div>
      </div>
    </section>
  );
}
