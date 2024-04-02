import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Main } from '../../styles'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.busca)

  const buscaContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Main>
      <h1>MEUS CONTATOS</h1>
      <ul>
        {buscaContatos().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
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
