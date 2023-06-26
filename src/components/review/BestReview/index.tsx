import React, { useState } from 'react';
import * as S from './style';
import ImageSlide from '../ImageSlide';
import DownArrow from '../../../../public/icons/angle-down.svg';
import UpArrow from '../../../../public/icons/angle-up.svg';
import { ReviewData, ReviewRes } from '@/types/review';
import { nameMarker } from '@/utils/nameMarker';
import { dateFormatter } from '@/utils/date';

interface BestReviewProps {
  bestReview: ReviewData;
}

const BestReview = ({ bestReview }: BestReviewProps) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <S.BestReview className="best_review">
      <div className="prograss_container">
        <ImageSlide beforeImage={bestReview.before[0]} afterImage={bestReview.after[0]} isBest={true} />
      </div>
      <S.ReviewCard isCardOpen={isCardOpen} onClick={() => setIsCardOpen(!isCardOpen)}>
        <div className="card_header">
          <div className="arrow_icon">{isCardOpen ? <UpArrow /> : <DownArrow />}</div>
          <div className="flex_box">
            <span className="auth">
              {bestReview.address} {nameMarker(bestReview.name)}님
            </span>
            <span className="date">{dateFormatter(bestReview.date)}</span>
          </div>
          <div className="title">{bestReview.title}</div>
        </div>
        {isCardOpen && <div className="card_content">{bestReview.content}</div>}
      </S.ReviewCard>
    </S.BestReview>
  );
};

export default BestReview;
