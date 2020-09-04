import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html,
 body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    margin: 0;
  }

  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  img,
  video,
  object {
    height: auto;
    max-width: 100%;
  }

  figure {
    margin: 0;
  }
`;

export default GlobalStyle;