import styled from 'styled-components'

export const ContainerAboutUs = styled.div`
  display: flex;
  margin-top: 118px;
  padding: 24px;

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    img {
      display: none;
    }
  }

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    margin-top: 84px;
  }
`

export const ContainerSobre = styled.div`
  display: flex;
  align-items: center;
  margin-right: 120px;

  @media only screen and (max-width: 767px) {
    /* Seus estilos aqui */
    margin-right: 0px;
    margin-top: 0;
  }

  h3 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: start;

    @media only screen and (max-width: 767px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 20px;
    font-weight: regular;

    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }
  }

  button {
    margin-top: 80px;
    background-color: #434142;
    color: white;
    font-size: 20px;

    font-weight: bold;
    padding: 16px 100px 16px 100px;
    border-radius: 12px;

    @media only screen and (max-width: 767px) {
      /* Seus estilos aqui */
      font-size: 16px;
      padding: 16px 56px;
    }
  }
`
