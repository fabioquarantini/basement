import Head from 'next/head'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import ProductsList from '../../components/ProductsList'

const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      <Layout>
        <Title>Products</Title>
        <ProductsList />
      </Layout>
      <Footer/>
    </>
  )
}