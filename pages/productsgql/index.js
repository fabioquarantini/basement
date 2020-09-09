import Head from 'next/head'
import Nav from '../../components/Nav'
import styled from 'styled-components'
import ProductsList from '../../components/ProductsList'

const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Products() {
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <Nav />
      <Title>Products</Title>
      <ProductsList />
    </div>
  )
}