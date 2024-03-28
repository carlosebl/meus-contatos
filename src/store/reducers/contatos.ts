import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      'Carlos Leite',
      '(51) 98926-3072',
      'carlosebl@gmail.com',
      'Desenvolvedor Front-End',
      1
    ),
    new Contato(
      'João Silva',
      '(11) 99732-4028',
      'joaosilva@gmail.com',
      'Desenvolvedor Back-End',
      2
    ),
    new Contato(
      'Maria Souza',
      '(21) 93452-8720',
      'mariasouza@gmail.com',
      'Desenvolvedor Full-Stack',
      3
    ),
    new Contato(
      'José Santos',
      '(61) 99328-1236',
      'josesantos@gmail.com',
      'Designer UX',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
