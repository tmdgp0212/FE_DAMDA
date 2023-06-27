import React from 'react';
import * as S from '@/styles/Main.styled';
import Carousel from '@/components/common/Carousel';
import { CarouselItem } from '@/components/common/Carousel/type';
import { useQuery } from '@tanstack/react-query';
import { getBestReview, getReviews } from '@/apis/review';

function UserReview() {
  const { data: review } = useQuery(['review'], getReviews);
  return (
    <>
      {review && <Carousel carouselItems={review.data} height={32} width={100} />}
      <S.MainMoreReviewButton>더 많은 후기 보러가기</S.MainMoreReviewButton>
    </>
  );
}

export default UserReview;
