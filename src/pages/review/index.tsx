import React from 'react';
import * as S from '../../styles/Review.styled';
import ReviewLayout from '@/components/review/reviewLayout';

function ReviewPage() {
  return (
    <S.ReviewContainer>
      <ReviewLayout />
    </S.ReviewContainer>
  );
}

export default ReviewPage;
