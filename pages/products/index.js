import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
export default function Products({ data }) {
  return (
    <div>
      <Head>
        <title>Products</title>
ì      </Head>
      <Nav />
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
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
  const data = await res.json()
  return { props: { data } }
}