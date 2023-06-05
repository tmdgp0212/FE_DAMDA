import React from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper';
import Image from 'next/image';
import 'swiper/css';

interface ImageSlideProps {
  beforeImage: string;
  afterImage: string;
}

function ImageSlide({ beforeImage, afterImage }: ImageSlideProps) {
  return (
    <S.SwiperContainer>
      <Swiper
        modules={[Autoplay, A11y]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        speed={1000}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          <Image src={beforeImage} alt="베스트 리뷰 후기 사진" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={afterImage} alt="베스트 리뷰 후기 사진" fill />
        </SwiperSlide>
      </Swiper>
      <div className="progress_bar"></div>
    </S.SwiperContainer>
  );
}

export default ImageSlide;
