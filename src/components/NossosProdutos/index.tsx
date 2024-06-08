import ItemNossosProdutos from '../ItemNossosProdutos'
import { ContainerQuadro, Quadrado } from '../ItemNossosProdutos/styles'
import {
  ContainerNossosProdutos,
  Grid,
  GridTest,
  TituloNossosProdutos
} from './styles'

const NossosProdutos = () => {
  return (
    <>
      <ContainerNossosProdutos>
        <TituloNossosProdutos>Nossos Produtos</TituloNossosProdutos>
        <Grid>
          <ItemNossosProdutos />
          <ItemNossosProdutos />
          <ItemNossosProdutos />
          <ItemNossosProdutos />
        </Grid>
      </ContainerNossosProdutos>
    </>
  )
}

export default NossosProdutos
