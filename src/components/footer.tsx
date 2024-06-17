import Image from 'next/image'
import Logo from '../assets/logo-horizontal.svg'

export function Footer() {
  return (
    <div className="flex flex-row justify-center items-center gap-2 bg-gray-300">
      <Image src={Logo} alt="Logo Footer" />
    </div>
  )
}