import React from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Pagination } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

interface ImageSlideProps {
  beforeImage: string; //before 사진 src
  afterImage: string; //after 사진 src
  isBest: boolean;
}

/**
 * @description isBest 값에 따라 슬라이드의 모양이 바뀝니다.
 * {true} : 이미지가 슬라이드형식으로 1초간 전환되며, 5초간 유지됩니다
 * {false} : 이미지가 전환효과 없이 바로 전환되며, 3초간 유지됩니다
 */

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
        touchRatio={0}
        pagination={true}
      >
        <SwiperSlide className="before">
          <Image src={beforeImage} alt="리뷰 후기 사진" fill />
        </SwiperSlide>
        <SwiperSlide className="after">
          <Image src={afterImage} alt="리뷰 후기 사진" fill />
        </SwiperSlide>
      </Swiper>
    </S.SwiperContainer>
  );
}

export default ImageSlide;
