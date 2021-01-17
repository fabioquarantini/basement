import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Product({ data }) {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      <Layout>
        <h1>{data.title}</h1>
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