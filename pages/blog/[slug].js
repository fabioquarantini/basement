import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Tags from "../../components/tags";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  //   if (!router.isFallback && !post?.slug) {
  //     return <ErrorPage statusCode={404} />
  //   }

  return (
    <>
      <Head>
        <title>
          {post.title} | Next.js Blog Example with {CMS_NAME}
        </title>
        <meta
          property="og:image"
          content={post.featuredImage?.node?.sourceUrl}
        />
      </Head>
      <Header />
      <Layout preview={preview}>
        {/* {router.isFallback ? (
                <p>Loading…</p>
            ) : (
                    <> */}

        <header className="pt-16 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime="2021-01-12">{post.date}</time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {post.title}
              </h1>
            </div>
          </div>
        </header>

        <article>
          <img
            className="w-full"
            src={post.featuredImage?.node.sourceUrl}
            alt="Basement"
          ></img>
          <div
            className="mt-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer>
            {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
          </footer>
        </article>

        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    </>
                )} */}
      </Layout>
      <Footer />
    </>
  );
}

// export async function getStaticProps({ params, preview = false, previewData }) {
export async function getServerSideProps({
  params,
  preview = false,
  previewData,
}) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

// export async function getStaticPaths() {
//     const allPosts = await getAllPostsWithSlug()

//     return {
//         paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
//         fallback: true,
//     }
// }
