import Favoritos from '../../components/Favoritos'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.CampoBusca type="text" placeholder="Buscar" />
      <Favoritos />
    </div>
  </S.Aside>
)

export default BarraLateral
