import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'

import styled from 'styled-components'
import ProductsList from '../../components/ProductsList'

const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

export default function Products() {
  return (
    <div>
      <Head>
        <title>Products</title>
ì      </Head>
      <ApolloProvider client={client}>
        <Nav />
        <Title>Products</Title>
        <ProductsList />
      </ApolloProvider>
    </div>
  )
}