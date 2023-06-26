import React, { useRef } from 'react';
import Pagination from 'react-js-pagination';
import BestBadge from '../../../public/icons/badge_best.svg';
import CleanerBadge from '../../../public/icons/badge_cleaner.svg';
import ReviewItem from './ReviewItem';
import DownArrow from '../../../public/icons/angle-down.svg';
import BannerSlide from './BannerSlide';
import BestReview from './BestReview';
import { slide1, slide2 } from '@/constants/reviewPageSlideItems';
import { ReviewData } from '@/types/review';
import { useInView } from 'framer-motion';
import * as S from '../../styles/Review.styled';

interface ReviewProps {
  posts: ReviewData[];
  bestReview: ReviewData;
  page: number;
  pageLength: number;
  pagingHandler: (page: number) => void;
}

function ReviewLayout({ posts, bestReview, page, pageLength, pagingHandler }: ReviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <>
      <S.TitleLarge>
        <span>옷장 정리로</span>
        <span>더 깔끔한 일상을</span>
        <span>만나보세요.</span>
      </S.TitleLarge>
      <S.Description>
        <span>열다 서비스의 전문적인 청소 시스템으로</span>
        <span>보다 편리한 생활을 느껴보세요.</span>
      </S.Description>

      <S.SlideContainer className="slide-container">
        <BannerSlide slideItems={slide1} />
        <BannerSlide slideItems={slide2} reverse={true} />
      </S.SlideContainer>

      <S.ScrollDown isInView={isInView}>
        <span>내려서 더 보기</span>
        <DownArrow />
      </S.ScrollDown>
      <S.TitleLarge>
        <span>열다를 만나신 분들의</span>
        <span>이야기를 들어보세요</span>
      </S.TitleLarge>
      <S.Description>
        <span>사진을 클릭하시면 열다 서비스를 사용하신</span>
        <span>사용자 분들의 후기를 자세히 보실 수 있습니다.</span>
      </S.Description>

      <S.Reviews className="reviews">
        <S.TitleMedium ref={ref}>
          <BestBadge />
          베스트 이용후기
        </S.TitleMedium>
        <BestReview bestReview={bestReview} />
        <S.TitleMedium>
          <CleanerBadge />
          열다의 모든 후기
        </S.TitleMedium>
        <S.AllReview>
          {posts.map((review, idx) => (
            <ReviewItem key={idx} review={review} />
          ))}
        </S.AllReview>
      </S.Reviews>
      <S.Pagenation>
        <Pagination
          activePage={page}
          itemsCountPerPage={3}
          totalItemsCount={pageLength}
          hideFirstLastPages={true}
          linkClassPrev="prev"
          linkClassNext="next"
          onChange={pagingHandler}
        />
      </S.Pagenation>
    </>
  );
}

export default ReviewLayout;
