import Image from 'next/image';
import NewBadge from '../../../public/icons/badge_new.svg';
import BestBadge from '../../../public/icons/badge_best.svg';
import * as S from './style';

interface ReviewProps {
  review: {
    id: number;
    title: string;
    body: string;
    userName: string;
    isNew: boolean;
    isBest: boolean;
    location: string;
    time: string;
    imageBefore: string;
    imageAfter: string;
  };
}

function ReviewItem({ review }: ReviewProps) {
  return (
    <S.ReviewItem>
      <S.ImageContainer className="image-before">
        <Image src={review.imageAfter} alt="후기사진" fill />
        <S.Badges>
          {review.isBest && <BestBadge />}
          {review.isNew && <NewBadge />}
        </S.Badges>
      </S.ImageContainer>
      <S.ReviewAuth>
        <span className="location">{review.location}</span>
        <span className="name">{review.userName}</span>
        <span className="time">{review.time}</span>
      </S.ReviewAuth>
      <S.ReviewTitle>{review.title}</S.ReviewTitle>
    </S.ReviewItem>
  );
}

export default ReviewItem;
