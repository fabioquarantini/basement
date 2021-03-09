import Head from 'next/head'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

export default function Product() {

  const router = useRouter();
  const GET_POST = gql`
    query {
      post(id: ${router.query.id}) {
        id
        title
        body
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      <Layout>
        <div className="max-w-xl m-auto">
          <h1 className="py-16">
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Product GQL:
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {data.post.title}
            </span>
          </h1>
          <p>{data.post.body}</p>
        </div>
      </Layout>
      <Footer/>
    </>
  )
}