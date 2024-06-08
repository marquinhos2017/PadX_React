import styled from 'styled-components'

export const Item = styled.div`
  color: white;
  display: flex;
  padding: 52px;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`
export const ContainerImg = styled.div`
  width: 100%;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;
  display: flex;

  img {
    max-width: 100%;
    width: 80%;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-right: 36px;
  }
`
export const Information = styled.div`
  align-items: center;
  width: 100%;
  //margin-left: 52px;
  display: flex;
  color: black;

  h3 {
    font-size: 32px;
    padding: 0;
    margin: 0;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 16px;
    color: #7a7a7a;
    margin: 0;
    padding: 0;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 14px;
    }
  }

  h5 {
    font-size: 24px;
    margin: 0;
    margin-top: 52px;
    margin-bottom: 48px;
  }

  hr {
    max-width: 920px;
    border-bottom: 0.5px solid #000000;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 24px;
    h3 {
      font-size: 24px;
      padding: 0;
      margin: 0;
    }
    p {
      font-size: 14px;
      color: #7a7a7a;
      margin: 0;
      padding: 0;
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
      }
    }

    h5 {
      font-size: 16px;

      margin-top: 52px;
      margin-bottom: 12px;
    }

    hr {
      max-width: 920px;
      border-bottom: 0.5px solid #000000;
    }
  }
`
export const ButtonSaibaMais = styled.button`
  font-weight: bold;
  color: white;
  background-color: #434142;
  width: 100%;
  border-radius: 10px;
  padding: 16px 72px;
  margin-top: 11px;
  font-size: 20px;

  border: none;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 767px) {
    font-weight: bold;
    color: white;
    background-color: #434142;
    width: 100%;
    border-radius: 10px;
    padding: 12px 24px;
    margin-top: 10px;
    font-size: 16px;

    border: none;
  }
`

export const About = styled.div``

export const Descricao = styled.div`
  padding: 72px 96px;
  background-color: black;
  color: white;

  h3 {
    font-size: 32px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 24px;
    }
  }

  h5 {
    font-style: normal;
  }

  h6 {
    font-weight: normal;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    font-size: 16px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 767px) {
    margin: 0;
    padding: 36px;
    background-color: black;
    color: white;

    h3 {
      font-size: 24px;
      margin: 0;
    }

    h5 {
      font-style: normal;
    }

    h6 {
      font-weight: normal;
      margin: 0;
      padding: 0;
      margin-bottom: 12px;
      font-size: 14px;
    }
  }
`

export const Galeria = styled.div`
  background-color: white;
  display: flex;
  text-align: center;
  justify-content: center;

  h3 {
    font-size: 32px;
  }
`

export const GaleriaImagems = styled.div`
  width: 100%;
  max-width: 100%; /* Garante que o contêiner não exceda o tamanho da tela */
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

export const ItemImg = styled.img`
  max-width: calc(
    25% - 48px
  ); /* Garante que a imagem não exceda o tamanho da tela */
  height: auto; /* Mantém a proporção da imagem */
  padding: 24px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: calc(45% - 48px);
  }

  @media only screen and (max-width: 767px) {
    max-width: calc(80% - 48px);
  }
`
