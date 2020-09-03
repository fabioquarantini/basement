import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>Basement</title>
      </Head>
      <Nav />
      <Title>Basement</Title>
    </div>
  )
}
