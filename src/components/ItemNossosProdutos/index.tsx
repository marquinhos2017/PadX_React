import {
  ContainerImageItemProduct,
  ContainerItemProduto,
  ImageProduct,
  Lin,
  Square,
  Title
} from './styles'
import teclado from '../../assets/images/5b36516bd94b429f8157ca9f61001e72-removebg-preview 1.png'
import { Link } from 'react-router-dom'

const ItemNossosProdutos = () => {
  return (
    <>
      <Lin to="/racksteclados" state={{ scrollToTop: true }}>
        <ContainerItemProduto>
          <Title>
            Rack <p>Studio</p>
          </Title>
          <ContainerImageItemProduct>
            <Square></Square>
            <ImageProduct src={teclado} alt="" srcSet="" />
          </ContainerImageItemProduct>
        </ContainerItemProduto>
      </Lin>
    </>
  )
}

export default ItemNossosProdutos
