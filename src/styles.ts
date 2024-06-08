import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;

  }




`

export const Container = styled.div`
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  background-color: black;
  height: 100vh;
`

export const ContainerPad = styled.div`
  background-color: green;
  border: 2px groove blue;
  color: white;
  border-radius: 24px;
  height: 124px;
`

export default GlobalStyle
