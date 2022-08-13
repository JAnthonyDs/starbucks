import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }

    :root{
        --color-main: #017143;

        --color-green: #017143;
        --color-pink: #eb7495;
        --color-purple: #d752b1;
    }
`;