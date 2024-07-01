"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loading } from "@/components/loading"

import Photo1 from "../../../assets/ensaiogestante/gestante1.svg"
import Photo2 from "../../../assets/ensaiogestante/gestante2.svg"
import Photo3 from "../../../assets/ensaiogestante/gestante3.svg"
import Photo4 from "../../../assets/ensaiogestante/gestante4.svg"
import Photo5 from "../../../assets/ensaiogestante/gestante5.svg"
import Photo6 from "../../../assets/ensaiogestante/gestante6.svg"
import Photo7 from "../../../assets/ensaiogestante/gestante7.svg"
import Photo8 from "../../../assets/ensaiogestante/gestante8.svg"
import Photo9 from "../../../assets/ensaiogestante/gestante9.svg"
import Photo10 from "../../../assets/ensaiogestante/gestante10.svg"
import Photo11 from "../../../assets/ensaiogestante/gestanteone.svg"
import Photo12 from "../../../assets/ensaiogestante/a.svg"
import Photo13 from "../../../assets/ensaiogestante/b.svg"
import Photo14 from "../../../assets/ensaiogestante/c.svg"
import Photo15 from "../../../assets/ensaiogestante/test.svg"

export default function EnsaioGestante() {

 const [isloading, setLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => {
  setLoading(false)
 }, 1000)
 }, [])

 return (
    <div className="mt-28 flex items-center justify-center">
     {isloading ? ( 
     Array(3)
     .fill(null)
     .map((d, i) =>
     <div key={i} className="flex flex-col">
     <Loading key={i} />
     <Loading key={i} />
     <Loading key={i} />
     <Loading key={i} />
     </div>
     )
    ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 md:px-0 gap-4">

<div className="relative cursor-pointer hover:opacity-40 w-[400px]">
<Image src={Photo6} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo2} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo10} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo13} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo14} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo12} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo1} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo4} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo5} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo8} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo11} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo9} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo7} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo3} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo15} width={400} height={400} alt="Photo ensaio gestante" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Gestante
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