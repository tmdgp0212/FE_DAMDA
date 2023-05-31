import * as S from '../../styles/Review.styled';
import BestBadge from '../../../public/icons/badge_best.svg';
import CleanerBadge from '../../../public/icons/badge_cleaner.svg';
import ReviewItem from './ReviewItem';

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
    <>
      <S.TitleLarge>
        <span>옷장 정리 후에 바뀐 생활을</span>
        <span>체험해 보세요.</span>
      </S.TitleLarge>
      <S.Description>
        <span>열다 서비스의 전문적인 청소 시스템으로</span>
        <span>보다 편리한 생활을 느껴보세요.</span>
      </S.Description>

      <S.SlideContainer className="slide-container">
        <S.Slider className="image-slider-1"></S.Slider>
        <S.Slider className="image-slider-2"></S.Slider>
      </S.SlideContainer>

      <S.TitleLarge>
        <span>열다 회원님들의</span>
        <span>소중한 후기</span>
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
    </>
  );
}

export default ReviewLayout;
