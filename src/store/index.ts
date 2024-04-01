import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import buscaReducer from './reducers/busca'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    busca: buscaReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
