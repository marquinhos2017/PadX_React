import styled from 'styled-components'
import background from '../../assets/images/background.png'

export const BackgroundImg = styled.div`
  width: 100%;

  max-height: 100%; /* Altura da viewport */

  background-image: url(${background});
  background-size: cover; /* Cobrir toda a div */
  background-position: center; /* Centralizar o background */
  display: flex;

  align-items: center; /* Centralizar verticalmente */
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`
export const Texto = styled.div`
  //border: 1px solid white;
  padding: 120px;
  max-width: 45%;
  p {
    font-size: 16px;
    color: white;
  }

  h3 {
    font-size: 32px;
    font-weight: bold;
    color: white;
  }

  animation: moveUp 1s ease-out;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 24px;
    max-width: 45%;

    p {
      display: flex;

      font-size: 16px;
      display: inline-block;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 24px;
    max-width: 100%;
  }
`

export const Imagem = styled.div`
  padding: 20px;
  width: 50%;
  display: flex;
  justify-content: center; /* Para centralizar horizontalmente */
  align-items: center; /* Para centralizar verticalmente */

  img {
    max-height: 100%;
    width: 700px;
    height: auto;
    border: none;
    position: relative;
    overflow: hidden;
    animation: moveUp 1s ease-out;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      width: 500px;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
      left: 0px;
      padding: 24px;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @keyframes moveUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
