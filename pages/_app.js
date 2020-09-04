import Router from 'next/router';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import NProgress from 'nprogress';
import Head from 'next/head'
import GlobalStyle from "../styles/global";
import { lightTheme, darkTheme } from '../settings/theme';
import 'nprogress/nprogress.css';
// TODO: Move swiper css
import 'swiper/swiper-bundle.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {

  const theme = lightTheme

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

export default App
