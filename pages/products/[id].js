import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Product({ data }) {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Header />
      <div className="max-w-xl m-auto">
        <h1 className="py-16">
          <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
            Product:
          </span>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {data.title}
          </span>
        </h1>
        <p>{data.body}</p>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return { props: { data } };
}
