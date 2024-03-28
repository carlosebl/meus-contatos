import Contato from '../../components/Contato'
import { Main } from './styles'

const contatos = [
  {
    nome: 'Carlos Leite',
    descricao: 'Desenvolvedor Front-End'
  },
  {
    nome: 'João Silva',
    descricao: 'Desenvolvedor Back-End'
  },
  {
    nome: 'Ana Maria Fernandes',
    descricao: 'Desenvolvedora Full Stack'
  },
  {
    nome: 'José Santos',
    descricao: 'Designer UX'
  }
]

const ListaContatos = () => (
  <Main>
    <h1>MEUS CONTATOS</h1>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato nome={c.nome} descricao={c.descricao} />
        </li>
      ))}
    </ul>
  </Main>
)

export default ListaContatos
