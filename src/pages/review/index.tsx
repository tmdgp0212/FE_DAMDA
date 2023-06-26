import React, { useEffect, useState } from 'react';
import * as S from '../../styles/Review.styled';
import ReviewLayout from '@/components/review/ReviewLayout';
import { BestReviewRes, ReviewData, ReviewRes } from '@/types/review';
import { getBestReview, getReviews } from '@/apis/review';
import { bestReviewDummy } from '@/constants/dummyRevies';

interface ReviewPageProps {
  reviews: ReviewRes;
  bestReview: BestReviewRes;
}

export const getStaticProps = async () => {
  let reviews;
  let bestReview;
  try {
    reviews = await getReviews();
  } catch (err) {
    reviews = {
      data: [bestReviewDummy],
    };
  }

  try {
    bestReview = await getBestReview();
  } catch (err) {
    bestReview = {
      data: bestReviewDummy,
    };
  }
  return { props: { reviews: reviews, bestReview: bestReview }, revalidate: 60 * 60 };
};

function ReviewPage({ reviews, bestReview }: ReviewPageProps) {
  const [page, setPage] = useState(1);
  const [totalReviewCount, setToTalReviewCount] = useState(reviews.data.length);
  const [pagedReviews, setPagedReviews] = useState<ReviewData[]>([]);

  const reviewPaging = (page: number) => {
    setPage(page);
    console.log(reviews);
    const startIdx = (page - 1) * 3;
    const endIdx = startIdx + 3;
    const filteredReviews = reviews.data.filter((review, idx) => idx >= startIdx && endIdx > idx);
    setPagedReviews(filteredReviews);
  };

  useEffect(() => {
    reviewPaging(page);
  }, []);

  useEffect(() => {
    if (!reviews) return;
    setToTalReviewCount(reviews.data.length);
    reviewPaging(1);
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
