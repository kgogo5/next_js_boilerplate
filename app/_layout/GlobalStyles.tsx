"use client";

import { Global, css } from "@emotion/react";
import { Noto_Sans_KR } from "next/font/google";

const noto_sans = Noto_Sans_KR({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

const styles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    border: 0;
    font-family: "${noto_sans.className}", sans-serif;
    vertical-align: baseline;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  .hide {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }

  /* Material UI 버튼 초기화 */
  button.MuiButtonBase-root {
    min-width: auto;
    font-family: "${noto_sans.className}", sans-serif !important;
  }
  .MuiTypography-root,
  .MuiOutlinedInput-notchedOutline,
  .MuiSelect-select,
  .MuiButtonBase-root,
  .MuiInputBase-input {
    font-family: "${noto_sans.className}", sans-serif !important;
  }
  .MuiSkeleton-root {
    && {
      transform: unset;
    }
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
