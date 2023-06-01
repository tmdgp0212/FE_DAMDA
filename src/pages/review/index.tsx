import React from 'react';
import * as S from '../../styles/Review.styled';
import ReviewLayout from '@/components/review/ReviewLayout';

function ReviewPage() {
  return (
    <S.ReviewContainer>
      <ReviewLayout />
    </S.ReviewContainer>
  );
}

export default ReviewPage;
