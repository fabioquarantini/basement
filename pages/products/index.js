import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Products({ data }) {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      <Layout>
        <h1 className="py-16">
          <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
            Products
          </span>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Lorem ipsum dolor at et erm
          </span>
        </h1>

        <ul className="divide-y divide-gray-200 max-w-screen-sm m-auto">
          {data.map((product) => (
            <li key={product.id} className="py-4">
              <Link href="/products/[id]" as={`/products/${product.id}`}>
                <a className="list__link">{product.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { props: { data } };
}
