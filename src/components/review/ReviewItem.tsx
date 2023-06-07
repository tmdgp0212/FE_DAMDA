import NewBadge from '../../../public/icons/badge_new.svg';
import BestBadge from '../../../public/icons/badge_best.svg';
import * as S from './style';
import ImageSlide from './ImageSlide';
import { dateFormatter, isNewReview } from '@/utils/date';
import { useState } from 'react';
import ReviewModal from './ReviewModal';

interface ReviewProps {
  review: {
    id: number;
    title: string;
    body: string;
    userName: string;
    isBest: boolean;
    location: string;
    time: string;
    imageBefore: string;
    imageAfter: string;
  };
}

function ReviewItem({ review }: ReviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isNew = isNewReview(review.time);

  return (
    <>
      <S.ReviewItem onClick={() => setIsModalOpen(true)}>
        <S.ImageContainer className="image-before">
          <ImageSlide afterImage={review.imageAfter} beforeImage={review.imageBefore} isBest={false} />
          <S.Badges>
            {review.isBest && <BestBadge />}
            {isNew && <NewBadge />}
          </S.Badges>
        </S.ImageContainer>
        <S.ReviewAuth>
          <span className="location">{review.location}</span>
          <span className="name">{review.userName.replace(/(?<=.{1})./gi, '*')}님</span>
          <span className="time">{dateFormatter(review.time)}</span>
        </S.ReviewAuth>
        <S.ReviewTitle>{review.title}</S.ReviewTitle>
      </S.ReviewItem>
      {isModalOpen && <ReviewModal />}
    </>
  );
}

export default ReviewItem;
