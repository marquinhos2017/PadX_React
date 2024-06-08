import AboutUs from '../AboutUs'
import Banner from '../Banner'
import ItemProduct from '../ItemProduct/ItemProduct'
import ItemProduct2 from '../ItemProduct/ItemProduct2'
import RacksparaEstudio from '../RacksParaEstudio'
import ContainerProducts, { ContainerTela } from './styles'

const Products = () => (
  <>
    <ContainerTela>
      <h3>Produtos em destaque</h3>
      <ContainerProducts>
        <ItemProduct />
        <ItemProduct2 />
        <ItemProduct />
      </ContainerProducts>
      <AboutUs />
    </ContainerTela>
    <RacksparaEstudio />
  </>
)
export default Products
