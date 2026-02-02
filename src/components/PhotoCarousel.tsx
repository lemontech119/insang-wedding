"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

// 실제 사용 시 public/wedding/ 폴더에 사진을 넣고 ["/wedding/1.jpg", ...] 로 변경
const DEFAULT_IMAGES = [
  "https://picsum.photos/400/533?random=1",
  "https://picsum.photos/400/533?random=2",
  "https://picsum.photos/400/533?random=3",
];

interface PhotoCarouselProps {
  images?: string[];
  alt?: string;
}

export default function PhotoCarousel({
  images = DEFAULT_IMAGES,
  alt = "웨딩 사진",
}: PhotoCarouselProps) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`${alt} ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
