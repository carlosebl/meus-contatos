import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Carlos Leite',
      telefone: '(51) 98926-3072',
      email: 'carlosebl@gmail.com',
      descricao: 'Desenvolvedor Front-End',
      id: 1
    },
    {
      nome: 'João Silva',
      telefone: '(11) 99732-4028',
      email: 'joaosilva@gmail.com',
      descricao: 'Desenvolvedor Back-End',
      id: 2
    },
    {
      nome: 'Maria Souza',
      telefone: '(21) 93452-8720',
      email: 'mariasouza@gmail.com',
      descricao: 'Desenvolvedor Full-Stack',
      id: 3
    },
    {
      nome: 'José Santos',
      telefone: '(61) 99328-1236',
      email: 'josesantos@gmail.com',
      descricao: 'Designer UX',
      id: 4
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
