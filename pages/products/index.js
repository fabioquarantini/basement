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
export default function Products({ data }) {
  return (
    <>
      <Head>
        <title>Products</title>
ì      </Head>
      <Header />
      <Layout>
        <Title>Products</Title>
        <ul>
        {data.map(product => (
          <li key={product.id}>
            <Link href="/products/[id]" as={`/products/${product.id}`}>
              <a className="list__link">{product.title}</a>
            </Link>
          </li>
        ))}
        </ul>
      </Layout>
      <Footer/>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
  const data = await res.json()
  return { props: { data } }
}