import { FooterContainer, Lista, FooterA, Links } from './styles'

export const Footer = () => (
  <>
    <FooterA>
      <FooterContainer>
        <Lista>
          <h3>
            <b>Products</b>
          </h3>
          <li>Custom</li>
          <li>Estudio</li>
          <li>Teclado</li>
          <li>DJ</li>
          <li>Audio e Video </li>
          <li>Acessorios</li>
          <li>Periferico</li>
        </Lista>
        <Lista>
          <h3>
            <b>Home</b>
          </h3>
          <li>Home</li>
          <li>The Company</li>
          <li>Contact</li>
        </Lista>
      </FooterContainer>
      <p>titanium@titaniumracks.com.br</p>
      <Links>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <h6>2024 © Titanium Racks. All rights reserved.</h6>
      </Links>
    </FooterA>
  </>
)

export default Footer
