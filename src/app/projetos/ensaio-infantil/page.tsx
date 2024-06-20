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
    <Image src={Photo8} width={400} height={400} alt="Photo ensaio crianca" />
    <Image src={Photo2} width={400} height={400} alt="Photo ensaio crianca" />
    <Image src={Photo3} width={400} height={400} alt="Photo ensaio crianca" />
    <Image src={Photo4} width={400} height={400} alt="Photo ensaio crianca" />
    <Image src={Photo1} width={400} height={400} alt="Photo ensaio crianca" />
    <Image src={Photo5} width={400} height={400} alt="Photo ensaio crianca" />
    <Image src={Photo6} width={400} height={400} alt="Photo ensaio crianca" />
    <Image src={Photo7} width={400} height={400} alt="Photo ensaio crianca" />
    </div>
    )}
   </div>
 )
}