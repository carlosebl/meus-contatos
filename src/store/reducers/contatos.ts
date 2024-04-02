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
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExistente) {
        alert('Já existe um contato com o mesmo nome.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
