import styled from 'styled-components'

export const TituloNossosProdutos = styled.h3`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`
export const ContainerNossosProdutos = styled.div`
  max-width: 1400px;
  margin: 96px auto 0;
  padding: 24px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px; /* Ajuste conforme necessário */
  align-items: center; /* Centraliza os itens verticalmente */
  justify-items: center; /* Centraliza os itens horizontalmente */

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    grid-template-columns: 1fr;
  }
`

export const GridTest = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center; /* Centraliza os itens verticalmente */
  justify-items: center; /* Centraliza os itens horizontalmente */
`
