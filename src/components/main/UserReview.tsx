import React, { useEffect, useState } from 'react';
import * as S from '@/styles/Main.styled';
import Carousel from '@/components/common/Carousel';
import { useQuery } from '@tanstack/react-query';
import { getReviews } from '@/apis/review';
import { ReviewData } from '@/types/review';

function UserReview() {
  const { data: review } = useQuery(['review'], getReviews);
  const [reviewData, setReviewData] = useState<ReviewData[]>();

  useEffect(() => {
    if (!review) return;
    console.log(review.data);

    const bestReview = review?.data.filter((item) => item.bestReview)[0];
    const firstItem = review?.data.filter((item) => !item.bestReview)[0];

    setReviewData([bestReview, firstItem]);
  }, [review]);

  return (
    <>
      {reviewData && <Carousel carouselItems={reviewData} height={32} width={100} />}
      <S.MainMoreReviewButton href={'/review'}>더 많은 후기 보러가기</S.MainMoreReviewButton>
    </>
  );
}

export default UserReview;
