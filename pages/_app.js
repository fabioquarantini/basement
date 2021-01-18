import Router from 'next/router';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import NProgress from 'nprogress';
import Head from 'next/head';
import '../styles/globals.css'
import 'nprogress/nprogress.css';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/icon.png" />
          {/* <meta name="theme-color" content="" /> */}
        </Head>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
