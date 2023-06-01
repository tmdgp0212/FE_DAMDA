import React from 'react';
import * as S from '@/styles/Main.styled';
import Carousel from '@/components/common/Carousel';
import { CarouselItem } from '@/components/common/Carousel/type';

function UserReview() {
  const carouselItems: CarouselItem[] = [
    {
      title: '용산구 김**',
      id: 1,
      link: 'link',
      description: '시간이 많이 절약 됐어요!',
      image: '1',
    },
    {
      title: '강남구 이**',
      id: 2,
      link: 'link',
      description: '친절한 설명과 서비스 제공이 빨랐어요!',
      image: '2',
    },
  ];
  return (
    <>
      <Carousel carouselItems={carouselItems} height={32} width={100} isNextBySide={true} />
      <S.MainMoreReviewButton>더 많은 후기 보러가기</S.MainMoreReviewButton>
    </>
  );
}

export default UserReview;
