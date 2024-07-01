"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loading } from "@/components/loading"

import Photo1 from "../../../assets/ensaiofeminino/carol1.svg"
import Photo2 from "../../../assets/ensaiofeminino/carol2.svg"
import Photo3 from "../../../assets/ensaiofeminino/carol3.svg"
import Photo4 from "../../../assets/ensaiofeminino/carol4.svg"
import Photo5 from "../../../assets/ensaiofeminino/carol5.svg"
import Photo6 from "../../../assets/ensaiofeminino/carol6.svg"
import Photo7 from "../../../assets/ensaiofeminino/mulher1.svg"
import Photo8 from "../../../assets/ensaiofeminino/mulher2.svg"
import Photo9 from "../../../assets/ensaiofeminino/capafeminino.svg"
import Photo10 from "../../../assets/ensaiofeminino/mulher4.svg"
import Photo11 from "../../../assets/ensaiofeminino/mulher5.svg"
import Photo12 from "../../../assets/ensaiofeminino/mulher6.svg"
import Photo13 from "../../../assets/ensaiofeminino/raquelone.svg"
import Photo14 from "../../../assets/ensaiofeminino/raqueltwo.svg"
import Photo15 from "../../../assets/ensaiofeminino/raquel16.svg"
import Photo16 from "../../../assets/ensaiofeminino/modelo1.svg"
import Photo17 from "../../../assets/ensaiofeminino/modelo2.svg"
import Photo18 from "../../../assets/ensaiofeminino/modelo3.svg"

export default function EnsaioFeminino() {

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
    <Image src={Photo2} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo6} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo3} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo1} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo4} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo5} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo7} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo9} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo8} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo10} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo11} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo13} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

       <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
       <Image src={Photo14} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

       <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
       <Image src={Photo15} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo12} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo16} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo18} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo17} width={400} height={400} alt="Photo ensaio feminino" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
          Ensaio Feminino
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