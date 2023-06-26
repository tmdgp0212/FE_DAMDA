import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { CarouselItem } from '@/components/common/Carousel/type';
import * as S from './style';
import UserReview from '@/components/common/Carousel/UserReview';

interface CarouselProps {
  carouselItems: CarouselItem[];
  height: number;
  width: number;
}

function Index({ carouselItems }: CarouselProps) {
  return (
    <S.CarouselWrapper>
      <Swiper
        spaceBetween={0}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        className="mySwiper"
      >
        {carouselItems.map((item) => (
          <SwiperSlide className="swiper-item" key={item.id}>
            <UserReview carouselItems={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarouselWrapper>
  );
}

//git test
export default Index;
