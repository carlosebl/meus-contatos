import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Main } from './styles'

const ListaContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <Main>
      <h1>MEUS CONTATOS</h1>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              descricao={c.descricao}
            />
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default ListaContatos
