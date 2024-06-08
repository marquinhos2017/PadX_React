import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;

  p {
    color: #d9d9d9;
    display: inline;
  }
  text-align: left;
  margin-bottom: 32px;
`

export const Square = styled.div`
  max-width: 400px;
  height: 220px;
  background-color: #d9d9d9;
  position: relative; /* Necessário para o posicionamento absoluto da imagem */

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    max-width: 350px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 300px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 200px;
  }
`

export const ImageProduct = styled.img`
  position: absolute;
  top: 60%; /* Move a imagem para 50% da altura da Square */
  left: 50%; /* Move a imagem para 50% da largura da Square */
  transform: translate(-50%, -50%); /* Centraliza a imagem */
  max-width: 100%;
  max-height: 100%;
  width: 350px;
  object-fit: cover;

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    left: 50%; /* Move a imagem para 50% da largura da Square */
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    position: absolute;
    top: 40%; /* Move a imagem para 50% da altura da Square */
    left: 20%; /* Move a imagem para 50% da largura da Square */
    transform: translate(-50%, -50%); /* Centraliza a imagem */
    max-width: 50%;
    max-height: 100%;
    width: 350px;
    object-fit: cover;
  }
`
export const ContainerImageItemProduct = styled.div`
  margin-left: 24px;
  width: 400px;
  height: 300px;
  position: relative;

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    width: 300px;
  }
`
export const ContainerItemProduto = styled.div`
  display: flex; /* Mudado para flex */
  flex-direction: column; /* Organiza os elementos em colunas */
  align-items: left; /* Alinha os elementos horizontalmente */
  justify-content: center; /* Alinha os elementos verticalmente */
  max-width: 100%;

  height: 350px;
  position: relative;
  overflow: hidden; /* Adicionado para evitar que os elementos ultrapassem o contêiner */

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    max-width: 100%;
  }

  &:hover {
    ${Square} {
      background-color: black;
    }
  }

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    margin-bottom: 42px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 200px;
  }
`

export const Lin = styled(Link)`
  text-decoration: none;

  color: black;
`

export const Quadrado = styled.div`
  background-color: green;
  height: 200px;
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
`

export const ContainerQuadro = styled.div`
  padding: 24px;
`
