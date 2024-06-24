"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
// import { Link } from 'react-router-dom'
import Image from 'next/image'

import test1 from '../../assets/test1.svg'
import test2 from '../../assets/carolb2.svg'
import test3 from '../../assets/ensaiocorporativo/mulhersix.svg'
import test4 from '../../assets/ensaiogestante/gestanteone.svg'
import test5 from '../../assets/mercela-about2.svg'
import test6 from '../../assets/ensaiocriancas/babyone.svg'
import test7 from '../../assets/ensaiofamily/familyfour.svg'
import test8 from '../../assets/ensaiocorporativo/capacorporativo.svg'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

export function Carrosel() {
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
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          //clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image
            src={test1}
            width={300}
            height={300}
            alt="image carrosel"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={test2}
            width={300}
            height={300}
            alt="image carrosel"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={test3}
            width={300}
            height={300}
            alt="image carrosel"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={test4}
            width={300}
            height={300}
            alt="image carrosel"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={test5}
            width={300}
            height={300}
            alt="image carrosel"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={test6}
            width={300}
            height={300}
            alt="image carrosel"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={test7}
            width={300}
            height={300}
            alt="image carrosel"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={test8}
            width={300}
            height={300}
            alt="image carrosel"
            loading="lazy"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft size={30} weight="bold" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight size={30} weight="bold" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}
