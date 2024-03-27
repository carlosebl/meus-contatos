import Favoritos from '../../components/Favoritos'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.CampoBusca type="text" placeholder="Buscar" />
      <Favoritos contador={0} />
    </div>
  </S.Aside>
)

export default BarraLateral
