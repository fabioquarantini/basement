import Router from 'next/router';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import NProgress from 'nprogress';
import Head from 'next/head'
import 'nprogress/nprogress.css';
// TODO: Move swiper css
import 'swiper/swiper-bundle.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

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

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fafafa" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
