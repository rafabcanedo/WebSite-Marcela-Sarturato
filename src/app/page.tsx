"use client"

import Main from '../assets/logo-main.svg'
import Frame from '../assets/transparência.svg'
import { Button } from '../components/button'
import Division from '../assets/logo-home.svg'
import { Title } from '../components/title'
import { Carrosel } from '../components/carrosel/carrosel'
import '../components/carrosel/carrosel.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import {
  LinkedinLogo,
  WhatsappLogo,
  InstagramLogo,
  Heart,
} from '@phosphor-icons/react'

//export default function Home() {
const Home = () => {
  return (
    <div style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed"}}>
     <div style={{ width: "100vw", height: "90vh" }}>
     <Image
      src={Frame}
      fill={true}
      objectFit= "cover"
      style={{ zIndex: -1 }}
      layout="fill"
      alt="Imagem de fundo Atelie"
     />
     
     <div className="flex flex-col items-center justify-start ml-16 gap-6 pt-48">
          <div>
            <Image src={Main} alt="Logo Circular" width={900} height={900} />
          </div>

          <div className="flex flex-row items-center gap-4">
            <div className="bg-primary h-0.5 w-10" />
            <Heart size={20} className='text-primary' />
            <div className="bg-primary h-0.5 w-10" />
          </div>

          <div className="flex flex-row gap-2">
            <a href="https://api.whatsapp.com/message/6H7OC6UMOHMEC1?autoload=1&app_absent=0" target="_blank">
            <WhatsappLogo
              size={25}
              className='text-primary cursor-pointer'
            />
            </a>
            <a href="https://www.instagram.com/masarturato.foto/" target="_blank">
            <InstagramLogo
              size={25}
              className='text-primary cursor-pointer'
            />
            </a>
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
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Severo%20Veloso,%201737%20-%20Loja%205%20-%20P%C3%A9rola%20Negra,%20Piumhi%20-%20MG,%2037925-000+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})

{/* <div style="width: 100%">
  <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Severo%20Veloso,%201737%20-%20Loja%205%20-%20P%C3%A9rola%20Negra,%20Piumhi%20-%20MG,%2037925-000+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
<a href="https://www.gps.ie/">gps tracker sport</a>
</iframe>
</div> */}