import React from 'react'
import Hero1 from '../../assets/images/hero1.jpg'
import Hero2 from '../../assets/images/hero2.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HomeFirst from './HomeFirst';
import HomeMap from './HomeMap';
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src={Hero2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hero1} alt="" />
                </SwiperSlide>

                ...
            </Swiper>
            <HomeFirst />
            <HomeMap />
        </div>
    )
}

export default Home