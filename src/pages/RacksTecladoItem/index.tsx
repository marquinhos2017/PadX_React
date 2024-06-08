import {
  About,
  ButtonSaibaMais,
  ContainerImg,
  Descricao,
  Galeria,
  GaleriaImagems,
  Information,
  Item,
  ItemImg
} from './styles'
import item from '../../assets/images/b.png'
import linha from '../../assets/images//Line 2.png'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export const RacksTecladoItem = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  return (
    <>
      <ScrollToTop />
      <Item>
        <ContainerImg>
          <img src={item} alt="" />
        </ContainerImg>
        <Information>
          <About>
            <h3>TY 250-1</h3>
            <p>Ideal para quem gosta de homestudio</p>
            <hr />
            <h5>$250.00</h5>
            <ButtonSaibaMais>Tenho Interesse</ButtonSaibaMais>
          </About>
        </Information>
      </Item>
      <Descricao>
        <h3>Descrição</h3>
        <h5>
          Rack em formato para <b>2 teclados</b>
        </h5>
        <h6>
          <b>Altura</b> total: 1,20m
        </h6>
        <h6>
          <b>Largura</b> TY-212: 1,20m
        </h6>
        <h6>
          <b>Largura</b> TY-215: 1,50m
        </h6>
        <h6>Profundidade total: 50 cm</h6>
        <h6>
          <b>Material:</b> Tubo de alumínio com acabamento anodizado; Conexões
          em nylon.
        </h6>
        <h6>
          <b>Cores:</b> Alumínio fosco.
        </h6>
      </Descricao>
      <Galeria>
        <div>
          <h3>Galeria</h3>

          <GaleriaImagems>
            <ItemImg src={item} alt="" />

            <ItemImg src={item} alt="" />
          </GaleriaImagems>
        </div>
      </Galeria>
    </>
  )
}

export default RacksTecladoItem
