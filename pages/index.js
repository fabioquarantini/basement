import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Basement</title>
      </Head>
      <Header />
      <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src="/img/sample-1.jpg"
              alt="Basement"
              width={1920}
              height={1280}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/sample-2.jpg"
              alt="Basement"
              width={1920}
              height={1280}
            />
          </SwiperSlide>
        </Swiper>
      <Layout>
        <Title>Basement</Title>
      </Layout>
      <Footer/>
    </>
  )
}
