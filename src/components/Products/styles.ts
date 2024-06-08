import styled from 'styled-components'

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //border: 1px solid black;
  grid-column-gap: 33px;
  padding: 24px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* Seus estilos aqui */
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    grid-template-columns: 1fr;
  }
`

export const ContainerTela = styled.div`
  max-width: 1440px;
  margin: auto;

  h3 {
    font-size: 32px;
    text-align: center;
  }

  h3 {
    margin-top: 56px;
    margin-bottom: 62px;
  }
`

export default ContainerProducts
