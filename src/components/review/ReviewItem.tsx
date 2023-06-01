import Image from 'next/image';
import * as S from './style';

interface ReviewProps {
  review: {
    id: number;
    title: string;
    body: string;
    userName: string;
    imageBefore: string;
    imageAfter: string;
    isNew: boolean;
  };
}

function ReviewItem({ review }: ReviewProps) {
  return (
    <S.ReviewItem>
      <S.ImageContainer className="image-before">
        <Image src={review.imageAfter} alt="후기사진" fill />
      </S.ImageContainer>
      <S.Badges>
        <span>new</span>
      </S.Badges>
      <S.ReviewTitle>{review.title}</S.ReviewTitle>
      <S.ReviewAuth>{review.userName}</S.ReviewAuth>
    </S.ReviewItem>
  );
}

export default ReviewItem;
