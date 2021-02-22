import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_ALL_POSTS = gql`
  query($options: PageQueryOptions) {
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
      options: {
        paginate: {
          page: 1,
          limit: 5,
        },
      },
    },
  });

  if (loading)
    return (
      <p>
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-black inline"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>{" "}
        Loading...
      </p>
    );
  if (error) return <p>Error :(</p>;

  return data.posts.data.map(({ id, title }) => (
    <li key={id} className="py-4">
      <Link href={`/productsgql/${id}`}>
        {/* <Link href="/productsgql/[id]" as={`/productsgql/${id}`}> */}
        <a className="list__link">{title}</a>
      </Link>
    </li>
  ));
}
