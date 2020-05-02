import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(
        to bottom,
        #d5dee7 0%,
        #e8ebf2 50%,
        #e2e7ed 100%
      ),
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.02) 50%,
        rgba(255, 255, 255, 0.02) 61%,
        rgba(0, 0, 0, 0.02) 73%
      ),
      linear-gradient(
        33deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      );
    background-blend-mode: normal, color-burn;
}
`