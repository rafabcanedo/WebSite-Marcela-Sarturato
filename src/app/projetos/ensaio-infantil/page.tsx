"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loading } from "@/components/loading"

import Photo1 from "../../../assets/ensaiocriancas/babybaloon.svg"
import Photo2 from "../../../assets/ensaiocriancas/babybaloontwo.svg"
import Photo3 from "../../../assets/ensaiocriancas/babycadeira.svg"
import Photo4 from "../../../assets/ensaiocriancas/babycaixa.svg"
import Photo5 from "../../../assets/ensaiocriancas/babyone.svg"
import Photo6 from "../../../assets/ensaiocriancas/babythree.svg"
import Photo7 from "../../../assets/ensaiocriancas/babytwo.svg"
import Photo8 from "../../../assets/ensaiocriancas/capacriancas.svg"
import Photo9 from "../../../assets/ensaiocriancas/a.jpg"
import Photo10 from "../../../assets/ensaiocriancas/b.jpg"
import Photo11 from "../../../assets/ensaiocriancas/c.jpg"
import Photo12 from "../../../assets/ensaiocriancas/5.jpg"

export default function EnsaioInfantil() {

 const [isloading, setLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => {
  setLoading(false)
  }, 1000)
 }, [])

 return (
    <div className="mt-28 flex items-center justify-center">
    {isloading ? ( 
     Array(10)
     .fill(null)
     .map((d, i) => <Loading key={i} />)
    ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 md:px-0 gap-4">

<div className="relative cursor-pointer hover:opacity-40 w-[400px]">
<Image src={Photo8} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>


      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo2} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>


      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo3} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>


      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo4} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo12} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo1} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo6} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo7} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo5} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo9} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo11} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo10} width={400} height={400} alt="Photo ensaio crianca" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Infantil
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

    </div>
    )}
   </div>
 )
}