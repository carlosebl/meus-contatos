import * as S from './styles'

const Contato = () => (
  <S.Contato>
    <S.BarraNome>
      <S.Nome>Nome do Contato</S.Nome>
      <S.Icone>S2</S.Icone>
    </S.BarraNome>
    <S.Infos>
      <label htmlFor="telefone">Telefone:</label>
      <p>(00) 00000-0000</p>
    </S.Infos>
    <S.Infos>
      <label htmlFor="email">E-mail:</label>
      <p>user@email.com</p>
    </S.Infos>
    <S.Infos>
      <textarea />
    </S.Infos>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Contato>
)

export default Contato
