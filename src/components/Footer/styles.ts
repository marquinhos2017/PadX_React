import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
`

export const Lista = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-right: 100px;

  li {
    margin-top: 8px;
  }

  h6 {
    font-size: 16px;
    margin-bottom: 36px;
    text-align: center;
    items-align: ceter;
  }

  @media only screen and (max-width: 767px) {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-right: 100px;

    li {
      margin-top: 8px;
      font-size: 14px;
    }

    h6 {
      font-size: 16px;
      margin-bottom: 36px;
      text-align: center;
      items-align: ceter;
    }
  }
`
export const FooterA = styled.footer`
  background-color: #3c3c3c;
  color: white;

  padding: 32px 56px;

  p {
    margin-top: 24px;
  }

  h6 {
  }

  @media only screen and (max-width: 767px) {
    background-color: #3c3c3c;
    color: white;

    padding: 32px 24px;

    p {
      margin-top: 24px;
      font-size: 12px;
    }

    h6 {
      fonts-size: 12px;
    }
  }
`

export const Links = styled.div`
  background-color: #3c3c3c;
  color: white;
  width: 100%;
  padding: 0;
  padding-top: 8px;
  //position: fixed;
  bottom: 0;
  text-align: center;

  h6 {
    margin: 0;
    padding: 0;
    margin-top: 8px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0px;

    li {
      display: inline-block;
      margin: 0 10px;
    }
  }
`
