import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
export default function Product({ data }) {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      <Layout>
        <Title>{data.title}</Title>
      </Layout>
      <Footer/>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  const data = await res.json()
  return { props: { data } }
}