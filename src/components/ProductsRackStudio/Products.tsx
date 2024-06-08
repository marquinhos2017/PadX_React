import AboutUs from '../AboutUs'
import Banner from '../Banner'
import ItemProduct from '../ItemProduct/ItemProduct'
import ItemProduct2 from '../ItemProduct/ItemProduct2'
import ItemProductRackStudio from '../ItemProductRackStudio/ItemProduct'
import ItemProductRackStudio2 from '../ItemProductRackStudio/ItemProduct2'
import RacksparaEstudio from '../RacksParaEstudio'
import ContainerProducts, { ContainerTela } from './styles'

const ProductsRackStudio = () => (
  <>
    <ContainerTela>
      <h3></h3>
      <ContainerProducts>
        <ItemProductRackStudio />
        <ItemProductRackStudio />

        <ItemProductRackStudio />
      </ContainerProducts>
    </ContainerTela>
  </>
)
export default ProductsRackStudio
