import BarraLateral from './containers/BarraLateral'
import ListaContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
