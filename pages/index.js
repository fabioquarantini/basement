import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'

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
    <div>
      <Head>
        <title>Basement</title>
      </Head>
      <Nav />

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src="/img/sample-1.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="/img/sample-2.jpg"></img></SwiperSlide>
      </Swiper>
      <Title>Basement</Title>
    </div>
  )
}
