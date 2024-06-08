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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  background-color: #202535;
  height: 100vh;
`

export const ContainerPad = styled.div`
  background-color: #464c67;

  color: white;
  border-radius: 24px;
  height: 86px;
  display:flex;

`

export const Color = styled.div`
  background-color:orange;
  width:56px;
`

export default GlobalStyle
