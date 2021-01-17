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
        <h1>{data.post.title}</h1>
        <p>{data.post.body}</p>
      </Layout>
      <Footer/>
    </>
  )
}