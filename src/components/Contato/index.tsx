import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, telefone, email, descricao, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Contato>
  )
}

export default Contato
