import Head from "next/head";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductsList";

export default function Products() {
  return (
    <>
      <Head>
        <title>Products GQL</title>
      </Head>
      <Header />
      <Layout>
        <h1 className="py-16">
          <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
            Products GQL
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Lorem ipsum dolor at et erm
          </span>
        </h1>
        <ul className="divide-y divide-gray-200 max-w-screen-sm m-auto">
          <ProductsList />
        </ul>
      </Layout>
      <Footer />
    </>
  );
}
