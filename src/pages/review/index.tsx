import React, { useEffect, useState } from 'react';
import * as S from '../../styles/Review.styled';
import ReviewLayout from '@/components/review/ReviewLayout';
import { BestReviewRes, ReviewData, ReviewRes } from '@/types/review';
import { getBestReview, getReviews } from '@/apis/review';

interface ReviewPageProps {
  reviews: ReviewRes;
  bestReview: BestReviewRes;
}

export const getStaticProps = async () => {
  const reviews = await getReviews();
  let bestReview;
  try {
    bestReview = await getBestReview();
  } catch (err) {
    bestReview = {
      data: {
        id: 1,
        title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
        content: '옷 방이 정리가 되니 옷 찾는 시간도 줄고 아침 준비 시간이 짧아진 것 같아요!',
        name: '박아무개',
        bestReview: true,
        address: '강남구',
        date: '2023-03-19',
        before: ['https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg'],
        after: [
          'https://lh3.googleusercontent.com/CU31XwIp1cWumUTTFcLlkUU8_HoBLBrM4ZOKij7cTyreQLIEXSKj4wrfDlBrA96PstRPeJXlCGtFJ7y4QwPYb9lhVimvpR9hUTLwINll',
        ],
      },
    };
  }
  return { props: { reviews: reviews, bestReview: bestReview }, revalidate: 60 * 60 };
};

function ReviewPage({ reviews, bestReview }: ReviewPageProps) {
  const [allReviews, setAllReviews] = useState<ReviewData[]>([]);
  const [page, setPage] = useState(1);
  const [totalReviewCount, setToTalReviewCount] = useState(allReviews.length);
  const [pagedReviews, setPagedReviews] = useState<ReviewData[]>([]);

  const reviewPaging = (page: number) => {
    setPage(page);

    const startIdx = (page - 1) * 3;
    const endIdx = startIdx + 3;
    setPagedReviews(allReviews.filter((review, idx) => idx >= startIdx && endIdx > idx));
  };

  useEffect(() => {
    reviewPaging(page);
  }, []);

  useEffect(() => {
    if (!reviews) return;
    setAllReviews(reviews.data);
    setToTalReviewCount(reviews.data.length);
  }, [reviews]);

  return (
    <S.ReviewContainer>
      <ReviewLayout
        posts={pagedReviews}
        bestReview={bestReview.data}
        page={page}
        pageLength={totalReviewCount}
        pagingHandler={reviewPaging}
      />
    </S.ReviewContainer>
  );
}

export default ReviewPage;
