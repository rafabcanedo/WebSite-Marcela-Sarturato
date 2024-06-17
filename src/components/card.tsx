import Image from 'next/image'
import { Button } from './button'
import Link from 'next/link'

interface CardProps {
  title: string
  image: string
  description: string
  href: string
}

export function Card({ title, image, description, href }: CardProps) {
  return (
    <div className="bg-background sm:w-[600px] py-6 px-6 m-5 flex md:flex-row flex-col items-center rounded-lg shadow-lg">
      <Image
        src={image}
        alt="Imagem Capa Ensaio"
        className="rounded-lg max-h-[300px] mb-4"
        width={250}
        height={250}
        loading="lazy"
      />
      <div className="bg-primary h-full w-0.5" />
      <div className="flex flex-col  pl-10 items-center justify-center">
        <h3 className="font-body text-text text-xl">{title}</h3>
        <span className="font-body text-text text-sm">{description}</span>
        <div className="flex justify-center mt-6">
          <Link href={href}>
            <Button size="lg" className="md:h-10 md:px-8 h-12 px-12">
              Ver Ensaio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
