"use client"

import Photo from '../../assets/test4.svg'
import Second from '../../assets/mercela-about2.svg'
import {
  InstagramLogo,
  WhatsappLogo,
  PinterestLogo,
} from '@phosphor-icons/react'
import { Title } from '../../components/title'
import Image from 'next/image'

export default function Sobre() {
  return (
    <>
      <div className="min-h-screen flex md:flex-row flex-col justify-center items-center gap-32 mt-48">
        <div>
          <Image
            src={Photo}
            alt="Photo Marcela Sorrindo"
            className="rounded-2xl"
            loading="lazy"
          />
          <div className=" rounded-md mt-2">
            <span className="flex text-gray text-2xl font-body justify-center">
              Marcela Sarturato
            </span>
            <p className="flex text-gray text-xl font-body justify-center mr-6">
              Fotógrafa
            </p>
          </div>
          <div className="flex flex-row w-96 items-center justify-between ml-6 mt-14">
           <a href="https://www.instagram.com/masarturato.foto/" target="_blank">
            <div className="flex items-center justify-center w-10 h-10 rounded-md">
              <InstagramLogo className="w-8 h-8 text-primary cursor-pointer" />
            </div>
            </a>

            <a href="https://api.whatsapp.com/message/6H7OC6UMOHMEC1?autoload=1&app_absent=0" target="_blank">
            <div className="flex items-center justify-center w-10 h-10 rounded-md">
              <WhatsappLogo className="w-8 h-8 text-primary cursor-pointer" />
            </div>
            </a>

            <a href="https://www.instagram.com/masarturato.foto/" target="_blank">
            <div className="flex items-center justify-center w-10 h-10 rounded-md">
              <PinterestLogo className="w-8 h-8 text-primary cursor-pointer" />
            </div>
            </a>
          </div>
        </div>
        <div>
          <div 
           className="flex-1 pt-16 pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:justify-center lg:items-center sm:justify-center sm:items-center"
          >
            <Title background color="white" className="mb-4 uppercase">
              Sobre Mim
            </Title>
            <span className="font-body text-gray flex items-center justify-center lg:text-base sm:justify-center sm:items-center sm:text-sm max-w-sm">
              Nasci no interior do estado de São Paulo, em uma cidade
              chamada Duartina. Sou formada em Direito, e trabalhei como
              advogada por 9 anos (sim, com OAB e tudo! os amigos do
              Direito entenderão essa, rs).
              Há cerca de quatro anos, decidi mudar completamente
              minha vida e aceitar novos desafios. Dei espaço a algo que
              sempre disseram ser meu dom: a fotografia. Transformei meu
              hobby de adolescência em profissão e, aos poucos, fiz a{' '}
              transição de carreira. Hoje, dedico 100% do meu tempo
              à fotografia. Sou apaixonada por café, chocolate e pela
              série “How I Met your Mother”.
            </span>
          </div>
          <div 
           className="flex-1 pt-16 pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:justify-center lg:items-center sm:justify-center sm:items-center"
          >
            <Title background color="white" className="mb-4 uppercase">
              Meus Trabalhos
            </Title>
            <span className="font-body text-gray flex items-center justify-center lg:text-base sm:justify-center sm:items-center sm:text-sm max-w-sm">
              Como fotógrafa, descobri que minha paixão é fotografar
              mulheres e famílias. Por isso, me especializei nos ensaios
              femininos das famílias. Comigo é fundamental que os ensaios
              sejam dinâmicos e diretos. Além disso, é muito importante
              para mim que minhas clientes se sintam completamente
              à vontade para serem quem realmente são.
            </span>
          </div>
          <div 
           className="flex-1 pt-16 pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:justify-center lg:items-center sm:justify-center sm:items-center"
          >
            <Title background color="white" className="mb-4 uppercase">
              Atelie Marcela Sarturato
            </Title>
            <span className="font-body text-gray flex items-center justify-center lg:text-base sm:justify-center sm:items-center sm:text-sm max-w-sm">
              O "Marcela Sarturato - Ateliê de Fotografia" é meu espaço,
              localizado no Pérola Negra Center, em Piumhi/MG.
              No final de 2023, pela primeira vez em 31 anos, deixei minha
              cidade natal para começar uma nova vida aqui.
              Divido meu dia a dia com meu noivo Gabriel e, juntos, estamos
              descobrindo as maravilhas de viver em Minas Gerais (trem
              bom demais).
            </span>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex-1 pt-20 pb-16 lg:pt-0 lg:w-auto z-10 flex md:flex-row flex-col justify-center items-center gap-24 mt-12">
        <div>
          <Title
            className="mb-6 flex text-primary justify-center items-center"
            decoration
          >
            Conheça meu Trabalho
          </Title>
          <span className="font-body text-gray flex items-center lg:text-base sm:text-sm justify-center max-w-sm">
            Minhas fotografias se destacam por serem atemporais, capturando
            momentos que permanecem vivos e relevantes ao longo do tempo.
            Valorizo a eficiência nos meus ensaios, tornando-os rápidos e
            dinâmicos, para que você possa aproveitar ao máximo cada instante.
            Além disso, o envio do orçamento é feito em até um dia útil, o que{' '}
            garante agilidade e transparência desde o seu primeiro
            contato comigo.
            Mande uma mensagem para mim e solicite seu orçamento para eternizar
            seus momentos especiais com a elegância e a autenticidade que você
            merece!
          </span>
          <div className="flex items-center justify-center mt-6">
           <a href="https://api.whatsapp.com/message/6H7OC6UMOHMEC1?autoload=1&app_absent=0" target="_blank">
            <button className="relative border-2 font-medium border-primary bg-transparent h-12 px-16 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 mt-6">
              Contato
            </button>
           </a>
          </div>
        </div>
        <div>
          <Image
            src={Second}
            alt="Photo Marcela Sorrindo"
            className="rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}