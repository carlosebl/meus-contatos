import * as S from './styles'

export type Props = {
  contador: number
}

const Favoritos = ({ contador }: Props) => (
  <S.Card>
    <p>Favoritos:</p>
    <S.Contador>{contador}</S.Contador>
  </S.Card>
)

export default Favoritos
