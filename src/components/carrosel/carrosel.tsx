"use client"
import React, { useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

export function Carrosel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const data = [
   { id: "1", image: require("../../assets/test1.svg")},
   { id: "2", image: require("../../assets/carolb2.svg")},
   { id: "3", image: require("../../assets/ensaiocorporativo/mulhersix.svg")},
   { id: "4", image: require("../../assets/ensaiogestante/gestanteone.svg")},
   { id: "5", image: require("../../assets/mercela-about2.svg")},
   { id: "6", image: require("../../assets/ensaiocriancas/babyone.svg")},
   { id: "7", image: require("../../assets/ensaiofamily/familyfour.svg")},
   { id: "8", image: require("../../assets/ensaiocorporativo/capacorporativo.svg")},
  ]

  return (
    <div className="flex items-center justify-center max-w-96 sm:max-w-96 md:max-w-7xl md:pt-16 md:pb-4 md:m-auto">
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {data.map((item) => (
    <>
    <SwiperSlide key={item.id}>
     <Image
      src={item.image}
      alt="Imagens Modelo"
      className="slide-item"
      loading="lazy"
     />
    </SwiperSlide>
    </>
  ))}

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}

/*
<div className="embla flex flex-col items-center justify-center max-w-96 sm:max-w-96 md:max-w-7xl md:pt-16 md:pb-4 md:m-auto">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center">
        {data.map((item) => (
         <>
        <div key={item.id}>
       <Image
        src={item.image}
        alt="Imagens Modelo"
        className="embla__img"
       />
       </div>
       </>
  ))}
        </div>
      </div>
    </div>

    <div className='flex flex-row gap-6'>
     <button className="embla__prev" onClick={scrollPrev}>
     <ArrowLeft className='text-primary' size={25} />
     </button>
     <button className="embla__next" onClick={scrollNext}>
      <ArrowRight className='text-primary' size={25} />
     </button>
    </div>
    </div>
*/

// className="embla__viewport mx-auto mt-12 max-w-lg border h-56" ref={emblaRef}