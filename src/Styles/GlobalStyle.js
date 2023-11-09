import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        font-family: 'Poppins', sans-serif;
 
    }
    :root{
        --color-main: #222831;
        --color-secundary: #393e46;
        --color-show: #f96d00;
        --color-text: #f2f2f2; 
    }
    body{
        background-color: var(--color-main);
 
   
    }



`