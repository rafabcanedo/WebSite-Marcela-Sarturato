"use client"

import { Envelope, WhatsappLogo, InstagramLogo } from '@phosphor-icons/react'
import Marcela from '../../assets/marcela-contact.svg'
import Logo from '../../assets/logo-circular.svg'
import { Instagram } from '../../components/instagram'
import Image from 'next/image'

export default function Contato() {
  return (
    <>
      <div className="min-h-screen flex py-10 md:flex-row flex-col items-center justify-center mt-48">
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="flex justify-center h-full">
            <Image
              src={Marcela}
              alt="Photo Marcela Atelie"
              loading="lazy"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={Logo}
              alt="Logo Atiele Circular"
              width={200}
              height={200}
              loading="lazy"
            />

            <div className="flex flex-col mt-10 gap-6">
              <div className="flex md:flex-row flex-col items-center gap-6">
                <Envelope className="w-6 h-6 text-primary" />
                <span className="font-mont text-xl text-gray">
                  marcelasarturato.fotografia@gmail.com
                </span>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-6">
                <WhatsappLogo className="w-6 h-6 text-primary" />
                <span className="font-mont text-xl text-gray">
                  +55 (37) 98406-0941
                </span>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-6">
                <InstagramLogo className="w-6 h-6 text-primary" />
                <span className="font-mont text-xl text-gray">
                  @masarturato.foto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-14'>
        <Instagram />
      </div>
    </>
  )
}
