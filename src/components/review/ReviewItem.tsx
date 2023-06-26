import NewBadge from '../../../public/icons/badge_new.svg';
import BestBadge from '../../../public/icons/badge_best.svg';
import * as S from './style';
import ImageSlide from './ImageSlide';
import { dateFormatter, isNewReview } from '@/utils/date';
import { useState } from 'react';
import ReviewModal from './ReviewModal';
import { ReviewData, ReviewRes } from '@/types/review';
import { nameMarker } from '@/utils/nameMarker';

interface ReviewProps {
  review: ReviewData;
}

function ReviewItem({ review }: ReviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isNew = isNewReview(review.date);

  return (
    <>
      <S.ReviewItem onClick={() => setIsModalOpen(true)}>
        <S.ImageContainer className="image-before">
          <ImageSlide afterImage={review.after[0]} beforeImage={review.before[0]} isBest={false} />
          <S.Badges>
            {review.bestReview && <BestBadge />}
            {isNew && <NewBadge />}
          </S.Badges>
        </S.ImageContainer>
        <S.ReviewAuth>
          <span className="location">{review.address} </span>
          <span className="name">{nameMarker(review.name)}님</span>
          <span className="time">{dateFormatter(review.date)}</span>
        </S.ReviewAuth>
        <S.ReviewTitle>{review.title}</S.ReviewTitle>
      </S.ReviewItem>
      {isModalOpen && <ReviewModal review={review} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default ReviewItem;
