"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loading } from "@/components/loading"

import Photo1 from "../../../assets/ensaiofamily/familyone.svg"
import Photo2 from "../../../assets/ensaiofamily/familytwo.svg"
import Photo3 from "../../../assets/ensaiofamily/familythree.svg"
import Photo4 from "../../../assets/ensaiofamily/familyfour.svg"
import Photo5 from "../../../assets/ensaiofamily/familyfive.svg"
import Photo6 from "../../../assets/ensaiofamily/familysix.svg"
import Photo7 from "../../../assets/ensaiofamily/familyseven.svg"
import Photo8 from "../../../assets/ensaiofamily/familyeight.svg"
import Photo9 from "../../../assets/ensaiofamily/familynine.svg"
import Photo10 from "../../../assets/ensaiofamily/familyten.svg"
import Photo11 from "../../../assets/ensaiofamily/familyeleven.svg"
import Photo12 from "../../../assets/ensaiofamily/familytwelve.svg"
import Photo13 from "../../../assets/ensaiofamily/familythirteen.svg"
import Photo14 from "../../../assets/ensaiofamily/familyfourteen.svg"
import Photo16 from "../../../assets/ensaiofamily/familseventeen.svg"
import Photo17 from "../../../assets/ensaiofamily/familia30.jpg"
import Photo18 from "../../../assets/ensaiofamily/familyvinte.svg"
import Photo20 from "../../../assets/ensaiofamily/familyvinteum.svg"

/*
  {isloading ? ( 
    Array(10)
    .fill(null)
    .map((d, i) => <Loading key={i} />)
   ) : (
*/

export default function EnsaioFamilia() {

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
     <Image src={Photo1} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo16} width={400} height={400} alt="Photo ensaio familia" />
      
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo2} width={400} height={400} alt="Photo ensaio familia" />
      
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo5} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo6} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo7} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo3} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo8} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo4} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo9} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo10} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo11} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo12} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo14} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo13} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo18} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo20} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            Marcela Sarturato
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
      <Image src={Photo17} width={400} height={400} alt="Photo ensaio familia" />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ensaio Família
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