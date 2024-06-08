import TitaniumRacks from '../../assets/images/Group 1.png'
import { ContainerAboutUs, ContainerSobre } from './styles'
const AboutUs = () => {
  return (
    <>
      <ContainerAboutUs>
        <ContainerSobre>
          <div>
            <h2>Abouts US</h2>
            <p>
              Empresa 100% brasileira há mais de 20 anos no mercado fabricando
              Racks modulares em alumínio com acabamento anodizado.{' '}
            </p>
            <p>
              Estruturas leve, resistente e com materiais de excelente
              qualidade. Produzimos racks em diversos segmentos como: Studio,
              Gravação de áudio/vídeo, DJ`s`, Teclados, Periféricos entre
              outros.
            </p>
            <button>Mais sobre</button>
          </div>
        </ContainerSobre>
        <div>
          <img src={TitaniumRacks} alt="" />
        </div>
      </ContainerAboutUs>
    </>
  )
}
export default AboutUs
