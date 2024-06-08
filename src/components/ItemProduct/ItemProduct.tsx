import {
  ButtonSaibaMais,
  ContainerItem,
  IconKeyboard,
  ImageWrapper,
  Img
} from './styles'
import teclado from '../../assets/images/a.png'
import teclado2 from '../../assets/images/5b36516bd94b429f8157ca9f61001e72-removebg-preview 1.png'
import Icon from '../../assets/images/pngtree-piano-icon-vector-png-image_8402179-removebg-preview 1.png'

const ItemProduct = () => {
  return (
    <>
      <ContainerItem>
        <ImageWrapper>
          <Img src={teclado} alt="" srcSet="" />
        </ImageWrapper>
        <IconKeyboard src={Icon} alt="" srcSet="" />
        <h5>TY-212/ 215</h5>
        <h6>
          2-in, 2-out USB audio interface with a condenser microphone and
          headphones
        </h6>
        <h5>R$ 250</h5>
        <ButtonSaibaMais>SAIBA MAIS</ButtonSaibaMais>
      </ContainerItem>
    </>
  )
}
export default ItemProduct
