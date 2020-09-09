import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
export default function Product({ data }) {
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <Nav />
      <Title>{data.title}</Title>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  const data = await res.json()
  return { props: { data } }
}