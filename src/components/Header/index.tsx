import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

const Header = () => {
  const itensProdutos = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )
  const valorTotal = itensProdutos.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensProdutos.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
