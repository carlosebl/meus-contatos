import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import BotaoAdicionar from '../../components/BotaoAdicionar'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/busca'
import * as S from './styles'

type Props = {
  mostrarBusca: boolean
}

const BarraLateral = ({ mostrarBusca }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.busca)

  return (
    <S.Aside>
      <div>
        {mostrarBusca ? (
          <>
            <S.CampoBusca
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <BotaoAdicionar />
          </>
        ) : (
          <S.BotaoVoltar onClick={() => navigate('/')}>
            VOLTAR AOS CONTATOS
          </S.BotaoVoltar>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
