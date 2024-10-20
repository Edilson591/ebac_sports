import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../../App'

type CarrinhoType = {
  itens: Produto[]
}

const inicialState: CarrinhoType = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: inicialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((item) => item.id === produto.id)) {
        alert('item ja adicionado')
      } else {
        state.itens = [...state.itens, produto]
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
