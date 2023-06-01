import * as S from '../../styles/Review.styled';
import BestBadge from '../../../public/icons/badge_best.svg';
import CleanerBadge from '../../../public/icons/badge_cleaner.svg';
import ReviewItem from './ReviewItem';
import DownArrow from '../../../public/icons/angle-down.svg';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { slide1, slide2 } from '@/constants/reviewPageSlideItems';

const dummy = [
  {
    id: 1,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '김아무개',
    isNew: true,
    imageBefore: '',
    imageAfter: 'https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg',
  },
  {
    id: 2,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '강아무개',
    isNew: true,
    imageBefore: '',
    imageAfter: 'https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg',
  },
  {
    id: 3,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '박아무개',
    isNew: true,
    imageBefore: '',
    imageAfter: 'https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg',
  },
  {
    id: 4,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '최아무개',
    isNew: true,
    imageBefore: '',
    imageAfter: 'https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg',
  },
];

function ReviewLayout() {
  return (
    <AnimatePresence>
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
        <S.Slider className="image-slider-1">
          {slide1.map((slide, idx) => (
            <S.SlideItem
              key={idx}
              // animate={{
              //   x: `-${idx * 100}%`,
              // }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                loop: Infinity,
                repeatDelay: 1,
              }}
            >
              <Image src={`${slide}`} alt="열다 서비스 이미지" width={130} height={130} />
            </S.SlideItem>
          ))}
        </S.Slider>
        <S.Slider className="image-slider-2">
          {slide2.map((slide, idx) => (
            <S.SlideItem key={idx}>
              <Image src={`${slide}`} alt="열다 서비스 이미지" width={130} height={130} />
            </S.SlideItem>
          ))}
        </S.Slider>
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
        <S.BestReview className="best-review">
          <div className="image">이미지</div>
          <div className="review-title">시간을 벌었어요!</div>
          <div className="review-content">
            <div className="user">사용자 : 김**님</div>
            <div className="preview">
              <span>옷장 정리가 되니까</span>
              <span>옷 찾는 시간이 줄었어요.</span>
            </div>
          </div>
        </S.BestReview>
        <S.TitleMedium>
          <CleanerBadge />
          열다의 모든 후기
        </S.TitleMedium>
        <S.AllReview>
          {dummy.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </S.AllReview>
        <S.Pagenation>1 2 3 4 </S.Pagenation>
      </S.Reviews>
    </AnimatePresence>
  );
}

export default ReviewLayout;
