import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  telefone: telefoneOriginal,
  email: emailOriginal,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)

  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [telefoneOriginal, emailOriginal, descricaoOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Contato>
      <S.BarraNome>
        <S.Nome>{nome}</S.Nome>
      </S.BarraNome>
      <S.Infos>
        <label htmlFor="telefone">Telefone:</label>
        <input
          disabled={!editando}
          type="tel"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
      </S.Infos>
      <S.Infos>
        <label htmlFor="email">E-mail:</label>
        <input
          disabled={!editando}
          type="mail"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.Infos>
      <S.Infos>
        <textarea
          disabled={!editando}
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
        />
      </S.Infos>
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    descricao,
                    id
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                cancelarEdicao()
              }}
            >
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
