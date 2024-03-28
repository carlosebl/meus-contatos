import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  telefone: string
  email: string
  descricao?: string
}

const Contato = ({ nome, telefone, email, descricao }: Props) => {
  const [editando, setEditando] = useState(false)

  return (
    <S.Contato>
      <S.BarraNome>
        <S.Nome>{nome}</S.Nome>
      </S.BarraNome>
      <S.Infos>
        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" value={telefone} />
      </S.Infos>
      <S.Infos>
        <label htmlFor="email">E-mail:</label>
        <input type="mail" value={email} />
      </S.Infos>
      <S.Infos>
        <textarea value={descricao} />
      </S.Infos>
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Contato>
  )
}

export default Contato
