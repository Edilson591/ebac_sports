import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../../App'

type FavoritosType = {
  itens: Produto[]
}

const inicialState: FavoritosType = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: inicialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((item) => item.id === produto.id)) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens = [...state.itens, produto]
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
