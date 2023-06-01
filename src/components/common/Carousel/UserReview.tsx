import React from 'react';
import { UserReviewWrapper } from '@/components/common/Carousel/style';
import { CarouselItem } from '@/components/common/Carousel/type';

interface UserReviewProps {
  carouselItems: CarouselItem;
}

function UserReview({ carouselItems }: UserReviewProps) {
  return (
    <UserReviewWrapper img={carouselItems.image} key={carouselItems.id}>
      <div className="image" />
      <div className="desc">
        <h1>{carouselItems.title}</h1>
        <p>{carouselItems.description}</p>
      </div>
    </UserReviewWrapper>
  );
}

export default UserReview;
