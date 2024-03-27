import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`

export default EstiloGlobal
