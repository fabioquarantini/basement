import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import NProgress from 'nprogress';
import Head from 'next/head';
import GlobalStyle from "../styles/global";
import { lightTheme, darkTheme } from '../settings/theme';
import 'nprogress/nprogress.css';
// TODO: Move swiper css
import 'swiper/swiper-bundle.css';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {

  const theme = lightTheme;

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content={theme.colors.primary} />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
