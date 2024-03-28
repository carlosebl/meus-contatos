import { styled } from 'styled-components'

export const Contato = styled.div`
  padding: 16px;
  margin-bottom: 24px;
  background-color: #718093;
  color: #f5f6fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const BarraNome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  margin-bottom: 16px;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
export const Nome = styled.h3`
  font-weight: bold;
  color: #273c75;
`
export const Infos = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 80px;
    margin-bottom: 16px;
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #f5f6fa;
    margin-bottom: 16px;
  }

  textarea {
    display: block;
    width: 100%;
    color: #f5f6fa;
    background-color: transparent;
    font-size: 12px;
    line-height: 24px;
    resize: none;
    border: none;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
`

export const Botao = styled.button`
  padding: 8px 16px;
  margin-right: 16px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: #353b48;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: #c23616;
`
