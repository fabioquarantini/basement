import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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
          <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Basement</h2>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Take control of your project.</p>
              <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia, quam a ultrices malesuada.</p>
            </div>
          </div>
      </Layout>
      <Footer/>
    </>
  )
}
