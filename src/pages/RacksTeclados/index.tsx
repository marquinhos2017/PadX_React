import { Link, useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import background from '../../assets/images/background.png'
import { BackgroundImg, Imagem, Texto } from './styles'
import b from '../../assets/images/b.png'
import Header from '../../components/Header'
import { useEffect } from 'react'
import ProductsRackStudio from '../../components/ProductsRackStudio/Products'

const RacksPiano = () => {
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

      <BackgroundImg>
        <Texto>
          <h3>Uma nova maneira de organizar e mixar no seu estudio</h3>
          <p>
            3 grupos tubos circulares para lhe dar mais flexibilidade e
            intertividade
          </p>
        </Texto>
        <Imagem>
          <img src={b} alt="" />
        </Imagem>
      </BackgroundImg>
      <ProductsRackStudio />
    </>
  )
}

export default RacksPiano
