import { useQuery, gql } from '@apollo/client';
import Link from 'next/link'

const GET_ALL_POSTS = gql`
  query (
    $options: PageQueryOptions
  ) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

export default function ProductsList() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: {
      "options": {
        "paginate": {
          "page": 1,
          "limit": 5
        }
      }
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.data.map(({ id, title }) => (
     <li key={id}>
          <Link href={`/productsgql/${id}`}>
          {/* <Link href="/productsgql/[id]" as={`/productsgql/${id}`}> */}
            <a className="list__link">{title}</a>
          </Link>
      </li>
  ));

}
