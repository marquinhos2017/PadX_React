import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { link } from 'fs'

export const Img = styled.img`
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover;
  align-items: center;
  padding: 50px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Espaço entre a imagem e o texto */
    object-fit: contain;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px; /* Espaço entre a imagem e o texto */
  height: 300px;
  margin-bottom: 64px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px; /* Espaço entre a imagem e o texto */
    height: 300px;
    margin-bottom: 32px;
  }
`

export const ContainerItem = styled.div`
  border: 1px solid white;
  display: block;
  //border: 1px solid red;
  margin: auto;
  padding: 32px;

  h6 {
    font-size: 10px;
    font-weight: normal;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 48px;
  }

  h5 {
    margin: 0;
    color: black;
  }

  &:hover {
    border: 1px solid black;
    transition: 1s;
  }

  border-radius: 10px;
`

export const ButtonSaibaMais = styled.button`
  font-weight: bold;
  color: white;
  background-color: #434142;
  width: 100%;
  border-radius: 10px;
  height: 35px;
  margin-top: 11px;

  border: none;
`
export const IconKeyboard = styled.img`
  margin-top: 11px;
  margin-bottom: 27px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`
