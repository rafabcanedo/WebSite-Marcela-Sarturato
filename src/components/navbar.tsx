"use client"

import { useState } from 'react'
import Logo from '../assets/logo-circular.svg'
import { List, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  const [open, setOpen] = useState(false)

  function closeNav() {
    setOpen(false)
  }
  // z-index for opacity background image
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-navbar py-4 md:px-10 px-7">
        <div>
          <a href="/">
            <Image src={Logo} alt="Logo Marcela" width={60} height={60} />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <X /> : <List />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-navbar md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}
        >
          <li
            className="text-lg text-black font-mont hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeNav}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className="text-lg font-mont text-black hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeNav}
          >
            <Link href="/about">Sobre Mim</Link>
          </li>

          <li
            className="text-lg font-mont text-black hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeNav}
          >
            <Link href="/projetos">Projetos</Link>
          </li>

          <li
            className="text-lg font-mont text-black hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeNav}
          >
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
