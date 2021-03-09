import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.css';

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
          <SwiperSlide className="aspect-w-16 aspect-h-5">
            <Image
              src="/img/sample-1.jpg"
              alt="Basement"
              className="object-cover"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className="aspect-w-16 aspect-h-5">
            <Image
              src="/img/sample-2.jpg"
              alt="Basement"
              className="object-cover"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>
      <Layout>
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Basement</h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Take control of your project.</p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia, quam a ultrices malesuada.</p>
            </div>
          </div>
      </Layout>
      <Footer/>
    </>
  )
}
