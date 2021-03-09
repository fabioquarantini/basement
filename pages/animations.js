import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { motion } from "framer-motion"

export default function Animation() {
  return (
    <>
      <Head>
        <title>Animations</title>
      </Head>
      <Header />
      <Layout>
        <h1 className="py-16">
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Animations
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor at et erm
            </span>
          </h1>
        <motion.div
          className="w-36 h-36 bg-red-500 rounded-md"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            yoyo: Infinity,
            //type: "spring",
            duration: 2,
            stiffness: 260,
            damping: 20
          }}
        />

      </Layout>

      <Footer/>
    </>
  )
}
