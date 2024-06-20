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
     Array(10)
     .fill(null)
     .map((d, i) => <Loading key={i} />)
    ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 md:px-0 gap-4">
    <Image src={Photo6} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo2} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo10} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo1} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo4} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo5} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo11} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo8} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo9} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo7} width={400} height={400} alt="Photo ensaio gestante" />
    <Image src={Photo3} width={400} height={400} alt="Photo ensaio gestante" />
    </div>
    )}
   </div>
 )
}