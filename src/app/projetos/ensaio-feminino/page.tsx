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

export default function EnsaioFeminino() {

 const [isloading, setLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => {
  setLoading(false)
 }, 1000)
 }, [])

 return (
    <div>
    {isloading ? ( 
     Array(10)
     .fill(null)
     .map((d, i) => <Loading key={i} />)
    ) : (
    <div className="grid grid-cols-3 gap-2">
    <Image src={Photo6} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo2} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo3} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo1} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo4} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo5} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo7} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo8} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo9} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo10} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo11} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo13} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo14} width={400} height={400} alt="Photo ensaio feminino" />
    <Image src={Photo12} width={400} height={400} alt="Photo ensaio feminino" />
    </div>
    )}
   </div>
 )
}