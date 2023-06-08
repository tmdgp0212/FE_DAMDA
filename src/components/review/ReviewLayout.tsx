import * as S from '../../styles/Review.styled';
import BestBadge from '../../../public/icons/badge_best.svg';
import CleanerBadge from '../../../public/icons/badge_cleaner.svg';
import ReviewItem from './ReviewItem';
import DownArrow from '../../../public/icons/angle-down.svg';
import UpArrow from '../../../public/icons/angle-up.svg';
import Pagination from 'react-js-pagination';
import BannerSlide from './BannerSlide';
import ImageSlide from './ImageSlide';
import { slide1, slide2 } from '@/constants/reviewPageSlideItems';
import { dateFormatter } from '@/utils/date';
import React, { useState } from 'react';
import { ReviewRes } from '@/types/review';
import { nameMarker } from '@/utils/nameMarker';

interface ReviewProps {
  posts: ReviewRes[];
  bestReview: ReviewRes;
  page: number;
  pageLength: number;
  pagingHandler: (page: number) => void;
}

function ReviewLayout({ posts, bestReview, page, pageLength, pagingHandler }: ReviewProps) {
  const [isCardOpen, setIsCardOpen] = useState(false);

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

      <S.ScrollDown>
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
        <S.TitleMedium>
          <BestBadge />
          베스트 이용후기
        </S.TitleMedium>
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
