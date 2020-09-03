import Head from 'next/head'
import Nav from '../components/nav'
import { motion } from "framer-motion"

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

const AnimatedDiv = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 150px;
  height: 150px;
  border-radius: 30px;
  margin: auto;
`;

export default function Animation() {
  return (
    <div>
      <Head>
        <title>Animation</title>
      </Head>
      <Nav />
      <Title>Animation</Title>

      <AnimatedDiv
        className="container2"
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

    </div>
  )
}
