import Head from 'next/head'
// import Nav from '../../components/Nav'
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

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
    <div>
      <Head>
        <title>Products</title>
      </Head>
      {/* <Nav /> */}
      <Title>{data.post.title}</Title>
    </div>
  )
}