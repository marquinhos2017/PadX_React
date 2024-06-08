import styled from 'styled-components'

export const ContainerRacksparaEstudio = styled.div`
  display: flex;
  margin-top: 56px;

  img {
    width: 100%;

    max-height: auto;
    object-fit: cover;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      width: 100%;
    }
  }
  @media only screen and (max-width: 767px) {
    display: block;
  }
`

export const ContainerImg = styled.div`
  width: 60%;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`
export const ContainerYT245 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-left: 24px;
  }

  @media only screen and (max-width: 767px) {
    margin-left: 0px;
    padding: 24px;
  }

  h4 {
    font-weight: bold;
    font-size: 20px;
    color: #7a7a7a;
    margin-bottom: 12px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 18px;
    }
  }
  h3 {
    margin: 0;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 45px;
    text-align: start;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin-bottom: 36px;
      font-size: 24px;
    }
  }

  p {
    font-size: 12px;
    font-weight: regular;
  }

  button {
    margin-top: 80px;
    background-color: #434142;
    color: white;
    font-size: 20px;

    font-weight: bold;
    padding: 16px 100px 16px 100px;
    border-radius: 12px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      margin-top: 24px;
      background-color: #434142;
      color: white;
      font-size: 16px;

      font-weight: bold;
      padding: 16px 64px 16px 64px;
      border-radius: 12px;
    }

    @media only screen and (max-width: 767px) {
      margin-top: 24px;
      background-color: #434142;
      color: white;
      font-size: 16px;

      font-weight: bold;
      padding: 16px 64px 16px 64px;
      border-radius: 12px;
    }
  }
`
