import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
