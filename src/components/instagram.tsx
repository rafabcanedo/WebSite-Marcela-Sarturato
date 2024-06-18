import Image from 'next/image'
import Photo1 from '../assets/ensaiocriancas/babycaixa.svg'
import Photo2 from '../assets/ensaiofamily/familyeighteen.svg'
import Photo3 from '../assets/ensaiofamily/familynine.svg'
import Photo4 from '../assets/carolb.svg'
import Photo5 from '../assets/ensaiocorporativo/homemsix.svg'
import Photo6 from '../assets/ensaiofamily/familytwelve.svg'

export function Instagram() {
  return (
    <div className="flex items-center justify-center w-full h-48">
      <div className="flex flex-row gap-2 items-center">
        <a
          href="https://www.instagram.com/p/C41HyVYv5I7/?img_index=1"
          target="_blank"
          rel="noreferrer"
          className="opacity-100 hover:opacity-80 transition-opacity"
        >
          <Image src={Photo1} alt="Instagram Post" width={250} height={250} />
        </a>

        <a
          href="https://www.instagram.com/p/CsuSFpIvotI/?img_index=1"
          target="_blank"
          rel="noreferrer"
          className="opacity-100 hover:opacity-80 transition-opacity"
        >
          <Image src={Photo4} alt="Instagram Post" width={250} height={250} />
        </a>
        <a
          href="https://www.instagram.com/p/Cv49pIQgwsD/"
          target="_blank"
          rel="noreferrer"
          className="opacity-100 hover:opacity-80 transition-opacity"
        >
          <Image src={Photo3} alt="Instagram Post" width={250} height={250} />
        </a>

        <a
          href="https://www.instagram.com/masarturato.foto/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center"
        >
          <button className="absolute flex items-center justify-center text-sm rounded bg-white font-body text-black h-8 px-6 shadow-lg">
            @masarturato.foto
          </button>
        </a>

        <a
          href="https://www.instagram.com/p/C41HyVYv5I7/?img_index=3"
          target="_blank"
          rel="noreferrer"
          className="opacity-100 hover:opacity-80 transition-opacity"
        >
          <Image src={Photo2} alt="Instagram Post" width={250} height={250} />
        </a>
        <a
          href="https://www.instagram.com/p/Cu9wtdBr0QM/?img_index=1"
          target="_blank"
          rel="noreferrer"
          className="opacity-100 hover:opacity-80 transition-opacity"
        >
          <Image src={Photo5} alt="Instagram Post" width={250} height={250} />
        </a>
        <a
          href="https://www.instagram.com/p/C3u4bbiLtKw/?img_index=1"
          target="_blank"
          rel="noreferrer"
          className="opacity-100 hover:opacity-80 transition-opacity"
        >
          <Image src={Photo6} alt="Instagram Post" width={250} height={250} />
        </a>
      </div>
    </div>
  )
}
