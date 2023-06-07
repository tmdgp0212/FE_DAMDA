import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ISwiper, { FreeMode, Navigation, Thumbs } from 'swiper';
import * as S from './style';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

function SlideGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper>();
  return (
    <S.SwiperContainer>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main_swiper"
      >
        <SwiperSlide>
          <Image alt="sample" src="https://swiperjs.com/demos/images/nature-1.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="sample" src="https://swiperjs.com/demos/images/nature-2.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="sample" src="https://swiperjs.com/demos/images/nature-3.jpg" width={300} height={300} />
        </SwiperSlide>
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
        <SwiperSlide>
          <Image alt="sample" src="https://swiperjs.com/demos/images/nature-1.jpg" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="sample" src="https://swiperjs.com/demos/images/nature-2.jpg" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="sample" src="https://swiperjs.com/demos/images/nature-3.jpg" fill />
        </SwiperSlide>
      </Swiper>
    </S.SwiperContainer>
  );
}

export default SlideGallery;
