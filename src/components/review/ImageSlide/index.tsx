import React from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Pagination } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

interface ImageSlideProps {
  beforeImage: string;
  afterImage: string;
  isBest: boolean;
}

function ImageSlide({ beforeImage, afterImage, isBest }: ImageSlideProps) {
  return (
    <S.SwiperContainer isBest={isBest}>
      <Swiper
        modules={[Autoplay, A11y, Pagination]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={isBest ? { delay: 5000 } : { delay: 3000 }}
        speed={isBest ? 1000 : 1}
        resistance={false}
        simulateTouch={false}
        pagination={true}
      >
        <SwiperSlide className="before">
          <Image src={beforeImage} alt="베스트 리뷰 후기 사진" fill />
        </SwiperSlide>
        <SwiperSlide className="after">
          <Image src={afterImage} alt="베스트 리뷰 후기 사진" fill />
        </SwiperSlide>
      </Swiper>
    </S.SwiperContainer>
  );
}

export default ImageSlide;
