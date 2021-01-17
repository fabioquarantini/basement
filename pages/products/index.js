import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Products({ data }) {
  return (
    <>
      <Head>
        <title>Products</title>
ì      </Head>
      <Header />
      <Layout>
        <h1>Products</h1>
        <ul className="divide-y divide-gray-200">
        {data.map(product => (
          <li key={product.id} className="py-4">
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