"use client"

import Photo from '../../assets/test4.svg'
import Second from '../../assets/mercela-about2.svg'
import {
  InstagramLogo,
  WhatsappLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import { Title } from '../../components/title'
import Image from 'next/image'

export default function Sobre() {
  return (
    <>
      <div className="min-h-screen flex md:flex-row flex-col justify-center items-center gap-20 mt-20">
        <div>
          <Image
            src={Photo}
            alt="Photo Marcela Sorrindo"
            className="rounded-2xl"
            loading="lazy"
          />
          <div className="bg-emerald-900/30 rounded-md">
            <span className="flex text-gray text-2xl font-body justify-center">
              Marcela Sarturato
            </span>
            <p className="flex text-gray text-xl font-body justify-end mr-6">
              Fotógrafa
            </p>
          </div>
          <div className="flex flex-row w-96 items-center justify-between ml-6 mt-14">
            <div className="bg-emerald-900/30 flex items-center justify-center w-10 h-10 rounded-md">
              <InstagramLogo className="w-8 h-8 text-primary cursor-pointer" />
            </div>
            <div className="bg-emerald-900/30 flex items-center justify-center w-10 h-10 rounded-md">
              <WhatsappLogo className="w-8 h-8 text-primary cursor-pointer" />
            </div>
            <div className="bg-emerald-900/30 flex items-center justify-center w-10 h-10 rounded-md">
              <LinkedinLogo className="w-8 h-8 text-primary cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 mb-6 px-4">
            <Title background color="white" className="mb-4 uppercase">
              Sobre Mim
            </Title>
            <span className="font-body text-gray flex items-center justify-center ml-4">
              Nasci no interior do estado de São Paulo, em uma cidade
              <br />
              chamada Duartina. Sou formada em Direito, e trabalhei <br /> como
              advogada por 9 anos (sim, com OAB e tudo! os <br /> amigos do
              Direito entenderão essa, rs).
              <br /> Há cerca de quatro anos, decidi mudar completamente
              <br /> minha vida e aceitar novos desafios. Dei espaço a algo que
              <br />
              sempre disseram ser meu dom: a fotografia. Transformei meu
              <br /> hobby de adolescência em profissão e, aos poucos, fiz a{' '}
              <br /> transição de carreira. Hoje, dedico 100% do meu tempo
              <br />
              à fotografia. Sou apaixonada por café, chocolate <br />e pela
              série “How I Met your Mother”.
            </span>
          </div>
          <div className="mt-4 mb-6 px-4">
            <Title background color="white" className="mb-4 uppercase">
              Meus Trabalhos
            </Title>
            <span className="font-body text-gray flex items-center justify-center ml-4">
              Como fotógrafa, descobri que minha paixão é fotografar
              <br />
              mulheres e famílias. Por isso, me especializei nos ensaios
              <br />
              femininos das famílias. Comigo é fundamental que os ensaios
              <br />
              sejam dinâmicos e diretos. Além disso, é muito importante
              <br />
              para mim que minhas clientes se sintam completamente
              <br />à vontade para serem quem realmente são.
            </span>
          </div>
          <div className="mt-4 mb-6 px-4">
            <Title background color="white" className="mb-4 uppercase">
              Atelie Marcela Sarturato
            </Title>
            <span className="font-body text-gray flex items-center justify-center ml-4">
              O "Marcela Sarturato - Ateliê de Fotografia" é meu espaço,
              <br />
              localizado no Pérola Negra Center, em Piumhi/MG.
              <br />
              No final de 2023, pela primeira vez em 31 anos, deixei minha
              <br />
              cidade natal para começar uma nova vida aqui.
              <br />
              Divido meu dia a dia com meu noivo Gabriel e, juntos, estamos
              <br />
              descobrindo as maravilhas de viver em <br /> Minas Gerais (trem
              bom demais).
            </span>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex md:flex-row flex-col justify-center items-center gap-8 mt-12">
        <div>
          <Title
            className="mb-6 flex text-primary justify-center items-center"
            decoration
          >
            Conheça meu Trabalho
          </Title>
          <span className="font-body text-gray flex items-center justify-center ml-4">
            Minhas fotografias se destacam por serem atemporais, capturando
            <br />
            momentos que permanecem vivos e relevantes ao longo do tempo.
            <br />
            Valorizo a eficiência nos meus ensaios, tornando-os rápidos e
            <br />
            dinâmicos, para que você possa aproveitar ao máximo cada instante.
            <br />
            Além disso, o envio do orçamento é feito em até um dia útil, o que{' '}
            <br /> garante agilidade e transparência desde o seu primeiro
            contato comigo.
            <br />
            Mande uma mensagem para mim e solicite seu orçamento para eternizar
            <br />
            seus momentos especiais com a elegância e a autenticidade que você
            merece!
          </span>
          <div className="flex items-center justify-center mt-6">
            <button className="relative border-2 font-medium border-primary bg-transparent h-12 px-16 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 mt-6">
              Contato
            </button>
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

/*
<div className="bg-neutral-300 flex items-center justify-center w-10 h-10 rounded-md">
              <InstagramLogo className="w-8 h-8 text-primary cursor-pointer" />
            </div>
*/
