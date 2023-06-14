import React, { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import * as S from './style';
import { ProcedureData } from '../../../types/constants/Procedure';
import 'swiper/css/bundle';

function ProcedureCarousel({ procedureData }: { procedureData: ProcedureData[] }) {
  return (
    <Swiper direction="horizontal" slidesPerView={1} spaceBetween={-10}>
      {procedureData.map((item, index) => (
        <SwiperSlide key={index} style={{ width: '320px', paddingTop: '2rem' }}>
          <S.Procedure>
            <S.ProcedureTitle>{item.title}</S.ProcedureTitle>
            <S.ProcedureImg img={item.img} />
            {item.content.map((desc, descIndex) => (
              <S.ProcedureDesc key={descIndex}>
                <AiOutlineCheck style={{ margin: '0.4rem 1rem 0 0', fontSize: '1.4rem', flexShrink: '0' }} />
                <p>{desc}</p>
              </S.ProcedureDesc>
            ))}
          </S.Procedure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProcedureCarousel;
