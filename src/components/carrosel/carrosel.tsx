"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

export function Carrosel() {

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
    <div className="container">
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
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