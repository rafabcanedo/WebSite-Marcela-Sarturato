"use client"

import Main from '../assets/logo-main.svg'
import Frame from '../assets/transparência.svg'
import { Button } from '../components/button'
import Division from '../assets/logo-home.svg'
import { Title } from '../components/title'
import { Carrosel } from '../components/carrosel/carrosel'
import '../components/carrosel/carrosel.css'
import Image from 'next/image'

import {
  LinkedinLogo,
  WhatsappLogo,
  InstagramLogo,
  Heart,
} from '@phosphor-icons/react'

export default function Home() {
  return (
    <>
     <div style={{ position: "relative", width: "100vw" }} className='h-screen'>
     <Image
      src={Frame}
      quality={100}
      layout="fill"
      sizes="100vw"
      objectFit= "cover"
      alt="Imagem de fundo Atelie"
     />
     
        <div className="flex flex-col items-center justify-start ml-16 gap-6">
          <div>
            <Image src={Main} alt="Logo Circular" width={900} height={900} />
          </div>

          <div className="flex flex-row items-center gap-4">
            <div className="bg-primary h-0.5 w-10" />
            <Heart size={20} className='text-primary' />
            <div className="bg-primary h-0.5 w-10" />
          </div>

          <div className="flex flex-row gap-2">
            <WhatsappLogo
              size={25}
              className='text-primary cursor-pointer'
            />
            <InstagramLogo
              size={25}
              className='text-primary cursor-pointer'
            />
            <LinkedinLogo
              size={25}
              className='text-primary cursor-pointer'
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <Button
              size="xl"
              className="rounded-md bg-transparent border-2 border-primary text-text font-mono hover:text-white"
            >
              Contato
            </Button>
          </div>
        </div>
        </div>

      <div className="min-h-screen flex flex-col justify-center items-center">

        <div className="mt-12">
          <Carrosel />
        </div>

        <div className="mt-12">
          <Title className="text-primary" decoration>
            Venha nos visitar
          </Title>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="w-full">
            <iframe
              width="700"
              height="500"
              className="container_map"
              src="https://maps.google.com/maps?width=720&amp;height=700&amp;hl=en&amp;q=R.%20Severo%20Veloso,%201737%20-%20Loja%205%20-%20P%C3%A9rola%20Negra,%20Piumhi%20-%20MG,%2037925-000+(Marcela%20Sarturato%20Atelie%20Fotos)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
}