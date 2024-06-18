"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loading } from "@/components/loading"

import Photo1 from "../../../assets/ensaiocorporativo/casal.svg"
import Photo2 from "../../../assets/ensaiocorporativo/casal2.svg"
import Photo3 from "../../../assets/ensaiocorporativo/home1.svg"
import Photo4 from "../../../assets/ensaiocorporativo/home50.svg"
import Photo5 from "../../../assets/ensaiocorporativo/homem2.svg"
import Photo6 from "../../../assets/ensaiocorporativo/homem3.svg"
import Photo7 from "../../../assets/ensaiocorporativo/mulherseven.svg"
import Photo8 from "../../../assets/ensaiocorporativo/jorge4.svg"
import Photo9 from "../../../assets/ensaiocorporativo/jorge5.svg"
import Photo10 from "../../../assets/ensaiocorporativo/jorge6.svg"
import Photo11 from "../../../assets/ensaiocorporativo/jorge7.svg"
import Photo12 from "../../../assets/ensaiocorporativo//mulhernine.svg"
import Photo13 from "../../../assets/ensaiocorporativo/mulhertwo.svg"
import Photo14 from "../../../assets/ensaiocorporativo/jorgec.svg"
import Photo15 from "../../../assets/ensaiocorporativo/jorged.svg"
import Photo16 from "../../../assets/ensaiocorporativo/jorgee.svg"
import Photo17 from "../../../assets/ensaiocorporativo/mulhereight.svg"
import Photo18 from "../../../assets/ensaiocorporativo/mulhereleven.svg"
import Photo19 from "../../../assets/ensaiocorporativo/mulherfive.svg"
import Photo20 from "../../../assets/ensaiocorporativo/mulherfour.svg"
import Photo21 from "../../../assets/ensaiocorporativo/mulherten.svg"

export default function EnsaioCorporativo() {

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
    <Image src={Photo4} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo2} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo3} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo1} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo6} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo5} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo7} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo11} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo13} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo9} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo17} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo20} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo10} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo14} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo12} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo15} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo16} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo21} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo8} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo18} width={400} height={400} alt="Photo ensaio corporativo" />
    <Image src={Photo19} width={400} height={400} alt="Photo ensaio corporativo" />
    </div>
    )}
   </div>
 )
}