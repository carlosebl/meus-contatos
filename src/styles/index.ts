import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
        list-style: none;
    }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
`
export const Main = styled.main`
  padding: 32px 360px;
  display: block;
  background-color: #f5f6fa;
  height: 100vh;
  overflow-y: scroll;

  h1 {
    margin-bottom: 32px;
    text-align: center;
    color: #192a56;
  }
`

export default EstiloGlobal
