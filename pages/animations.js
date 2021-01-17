import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { motion } from "framer-motion"

export default function Animation() {
  return (
    <>
      <Head>
        <title>Animation</title>
      </Head>
      <Header />
      <Layout>
        <h1>Animation</h1>
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
