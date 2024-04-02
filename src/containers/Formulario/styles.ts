import { styled } from 'styled-components'
import { Botao } from '../../components/Contato/styles'

export const FormNovoContato = styled.form`
  h1 {
    margin-bottom: 64px;
    color: #192a56;
    text-align: left;
  }
`

export const NovoInfos = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 80px;
    margin-bottom: 16px;
    margin-right: 16px;
  }

  input {
    font-size: 16px;
    color: #2f3640;
    margin-bottom: 16px;
  }

  textarea {
    display: block;
    width: 50%;
    color: #2f3640;
    font-size: 12px;
    line-height: 24px;
    resize: none;
    padding: 8px;
  }
`

export const BotaoCadastrar = styled(Botao)`
  margin-top: 32px;
  background-color: #44bd32;
  color: #fff;
  text-decoration: none;
  padding: 16px 40px;
  font-weight: bold;
  cursor: pointer;
`
