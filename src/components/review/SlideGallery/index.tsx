import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ISwiper, { FreeMode, Navigation, Thumbs } from 'swiper';
import Image from 'next/image';
import * as S from './style';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

interface SlideProps {
  images: string[];
}

function SlideGallery({ images }: SlideProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper>();

  return (
    <S.SwiperContainer>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main_swiper"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image alt="Before/After image" src={image} width={300} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        slidesOffsetBefore={20}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="gallery"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image alt="Before/After image thumbnail" src={image} fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperContainer>
  );
}

export default SlideGallery;
