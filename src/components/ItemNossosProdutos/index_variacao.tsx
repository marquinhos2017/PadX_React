import {
  ContainerImageItemProduct,
  ContainerItemProduto,
  ImageProduct,
  Square,
  Title
} from './styles'
import teclado from '../../assets/images/b.png'

const ItemNossosProdutosVariacao = () => {
  return (
    <>
      <ContainerItemProduto>
        <Title>
          Rack <p>Studio</p>
        </Title>
        <ContainerImageItemProduct>
          <Square></Square>
          <ImageProduct src={teclado} alt="" srcSet="" />
        </ContainerImageItemProduct>
      </ContainerItemProduto>
    </>
  )
}

export default ItemNossosProdutosVariacao
