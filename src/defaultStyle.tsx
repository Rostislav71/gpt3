import styled, {createGlobalStyle} from "styled-components";
import {colors , gradients} from "./theme.ts"
import GilroyBold from "./fonts/Gilroy-Bold.ttf"
import GilroyMedium from "./fonts/Gilroy-Medium.ttf"

export const Fonts = createGlobalStyle`
    body {
        font-family: 'Manrope', sans-serif;
        background: #040C18;
    }
    footer{
        background: #031B34;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url(${GilroyBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1210px;
    margin: 0 auto;
    padding: 0 15px;
    @media(min-width: 1920px){
        max-width: 1470px;
    }
`

export const TitleDefault = styled.h1`
    font-weight: 800;
    background: ${gradients.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`
export const TitleWhite = styled.h3`
    font-weight: 800;
    letter-spacing: -0.04em;
    color: ${colors.white}
`
export const TextOrange = styled.p`
    font-weight: 500;
    font-size: 16px;
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1440 - 320)));
    line-height: 187.5%;
    color: ${colors.secondaryorange}
`