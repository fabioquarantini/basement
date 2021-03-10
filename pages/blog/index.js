import Head from "next/head";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogList from "../../components/BlogList";
import { getAllPostsForHome } from "../../lib/api";

export default function Blog({ allPosts: { edges }, preview }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <Layout>
        <div class="pt-16 pb-8 space-y-2 md:space-y-5">
          <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h1>
          <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Lorem asdasd asdasd
          </p>
        </div>
        {edges.length > 0 && <BlogList posts={edges} />}
      </Layout>
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
export async function getServerSideProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
