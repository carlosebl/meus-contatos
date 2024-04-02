import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrar } from '../../store/reducers/contatos'
import { Main } from '../../styles'
import * as S from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [descricao, setDescricao] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <>
      <Main>
        <S.FormNovoContato onSubmit={cadastrarContato}>
          <h1>NOVO CONTATO</h1>
          <S.NovoInfos>
            <label htmlFor="nome">Nome: </label>
            <input
              value={nome}
              onChange={({ target }) => setNome(target.value)}
              type="text"
              id="nome"
              name="nome"
            />
          </S.NovoInfos>
          <S.NovoInfos>
            <label htmlFor="telefone">Telefone: </label>
            <input
              value={telefone}
              onChange={({ target }) => setTelefone(target.value)}
              type="tel"
              id="telefone"
              name="telefone"
            />
          </S.NovoInfos>
          <S.NovoInfos>
            <label htmlFor="email">E-mail: </label>
            <input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="mail"
              id="email"
              name="email"
            />
          </S.NovoInfos>
          <S.NovoInfos>
            <label htmlFor="descricao">Descrição: </label>
            <textarea
              value={descricao}
              onChange={({ target }) => setDescricao(target.value)}
              id="descricao"
            ></textarea>
          </S.NovoInfos>
          <S.BotaoCadastrar type="submit">CADASTRAR</S.BotaoCadastrar>
        </S.FormNovoContato>
      </Main>
    </>
  )
}

export default Formulario
