import React from 'react';
import * as S from '@/styles/Main.styled';
import Carousel from '@/components/common/Carousel';
import { useQuery } from '@tanstack/react-query';
import { getReviews } from '@/apis/review';

function UserReview() {
  const { data: review } = useQuery(['review'], getReviews);

  const bestReview = review?.data.filter((item) => item.bestReview)[0];
  const firstItem = review?.data.filter((item) => !item.bestReview)[0];

  if (!bestReview || !firstItem) return null;

  const combinedArray = [bestReview, firstItem];

  return (
    <>
      {review && <Carousel carouselItems={combinedArray} height={32} width={100} />}
      <S.MainMoreReviewButton>더 많은 후기 보러가기</S.MainMoreReviewButton>
    </>
  );
}

export default UserReview;
