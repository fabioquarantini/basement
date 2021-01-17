import Head from 'next/head'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductsList from '../../components/ProductsList'

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      <Layout>
        <h1>Products</h1>
        <ul className="divide-y divide-gray-200">
          <ProductsList />
        </ul>
      </Layout>
      <Footer/>
    </>
  )
}