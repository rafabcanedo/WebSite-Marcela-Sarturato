"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import Photo1 from "../../../assets/ensaiofamily/familyone.svg"
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
import Photo15 from "../../../assets/ensaiofamily/familysixteen.svg"
import Photo16 from "../../../assets/ensaiofamily/familseventeen.svg"
import Photo17 from "../../../assets/ensaiofamily/familyeighteen.svg"
import Photo18 from "../../../assets/ensaiofamily/familyvinte.svg"
import { Loading } from "@/components/loading"

export default function EnsaioFamilia() {

 const [isloading, setLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => {
   setLoading(false)
  }, 1000)
 }, [])

 return (
  <div>
   <h1>Ensaio Familia</h1>
   {isloading ? ( <Loading />
   ) : (
    <div>
   <Image src={Photo1} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo3} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo4} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo5} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo6} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo7} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo8} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo9} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo10} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo11} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo12} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo13} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo14} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo15} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo16} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo17} width={200} height={200} alt="Photo ensaio familia" />
   <Image src={Photo18} width={200} height={200} alt="Photo ensaio familia" />
   </div>
   )}
  </div>
 )
}