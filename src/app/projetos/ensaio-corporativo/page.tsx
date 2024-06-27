"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loading } from "@/components/loading"

import Photo2 from "../../../assets/ensaiocorporativo/casal2.svg"
import Photo3 from "../../../assets/ensaiocorporativo/home1.svg"
import Photo4 from "../../../assets/ensaiocorporativo/home50.svg"
import Photo7 from "../../../assets/ensaiocorporativo/mulherseven.svg"
import Photo8 from "../../../assets/ensaiocorporativo/semcamisa.svg"
import Photo9 from "../../../assets/ensaiocorporativo/jorge5.svg"
import Photo13 from "../../../assets/ensaiocorporativo/mulhertwo.svg"
import Photo14 from "../../../assets/ensaiocorporativo/jorgec.svg"
import Photo15 from "../../../assets/ensaiocorporativo/jorged.svg"
import Photo16 from "../../../assets/ensaiocorporativo/jorgee.svg"
import Photo17 from "../../../assets/ensaiocorporativo/mulhereight.svg"
import Photo18 from "../../../assets/ensaiocorporativo/mulhereleven.svg"
import Photo19 from "../../../assets/ensaiocorporativo/mulherfive.svg"
import Photo20 from "../../../assets/ensaiocorporativo/mulherfour.svg"
import Photo21 from "../../../assets/ensaiocorporativo/caasal.jpg"

export default function EnsaioCorporativo() {

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
      
      <Image src={Photo3} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      
      <Image src={Photo7} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          vEnsaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo13} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

    <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
    <Image src={Photo4} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo2} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo21} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo17} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo9} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo20} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo15} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo16} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo14} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo8} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo18} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo19} width={400} height={400} alt="Photo ensaio corporativo" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Corporativo
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