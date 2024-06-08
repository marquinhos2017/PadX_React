import styled from 'styled-components'

interface HeaderUlProps {
  isMenuOpen: boolean
  // outras props, se houver
}

export const HeaderUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  list-style-type: none;

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    display:none;
  }



  li {
    margin-right: 50px;
    list-style-type: none;
    font-size: 14px;
    color: #8f8f8f;
    margin: auto;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      /* Seus estilos aqui */
      font-size: 12px;
    }

    @media only screen and (max-width: 767px) {
        /* Seus estilos aqui */
        font-size: 12px;
    }
      }

  }
`

export const HeaderUlB = styled.ul<HeaderUlProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  list-style-type: none;
  display:none;

  

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  }

  li {
    margin-right: 50px;
    list-style-type: none;
    font-size: 14px;
    color: #8f8f8f;
    margin: auto;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      /* Seus estilos aqui */
      font-size: 12px;
    }

    @media only screen and (max-width: 767px) {
        /* Seus estilos aqui */
        font-size: 12px;
    }
      }

  }
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    margin: 0;
    justify-content: end;
  }

  img {
    max-width: 100px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* Seus estilos aqui */
  }
`
