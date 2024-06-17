import { Card } from '../../components/card'
import Family from '../assets/ensaiofamily/capafamilia.svg'
import Feminino from '../assets/ensaiofeminino/capafeminino.svg'
import Child from '../assets/ensaiocriancas/capacriancas.svg'
import Corporativo from '../assets/ensaiocorporativo/capacorporativo.svg'
import Gestante from '../assets/ensaiogestante/capagestante.svg'

export default function Projects() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-24 gap-12 sm:px-0">
        <Card
          image={Family}
          title="Ensaio Família"
          description="Ensaios feito com casais e filhos"
          href="/projetos/familia"
        />
        <Card
          image={Feminino}
          title="Ensaio Feminino"
          description="Ensaio com mulheres"
          href="/projetos/feminino"
        />
        <Card
          image={Child}
          title="Ensaio Infantil"
          description="Ensaio com crianças"
          href="/projetos/infantil"
        />
        <Card
          image={Corporativo}
          title="Ensaio Corporativo"
          description="Ensaio coporativo com homens e mulheres"
          href="/projetos/corporativo"
        />
        <Card
          image={Gestante}
          title="Ensaio Gestante"
          description="Ensaio com gestantes"
          href="/projetos/gestante"
        />
      </div>
    </div>
  )
}