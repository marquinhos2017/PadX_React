import { HeaderContainer, HeaderUl, HeaderUlB } from './styled'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { useState } from 'react'

export const SandwichMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    padding: 10px;
  }
`

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSandwichMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" srcSet="" />
      </Link>
      <HeaderUl>
        <li>HOME</li>
        <li>CONHECA A TITANIUM</li>
        <li>PRODUTOS</li>
        <li>CONTATO</li>
      </HeaderUl>
      <HeaderUlB isMenuOpen={isMenuOpen}>
        <li>PRODUTOS</li>
        <li>CONTATO</li>
      </HeaderUlB>
      <SandwichMenuIcon onClick={handleSandwichMenuClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      </SandwichMenuIcon>
    </HeaderContainer>
  )
}

export default Header
