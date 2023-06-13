import React, { useEffect, useState } from 'react';
import * as S from '../../styles/Review.styled';
import ReviewLayout from '@/components/review/ReviewLayout';
import { ReviewRes } from '@/types/review';
import { getReviews } from '@/apis/review';

const dummy: ReviewRes[] = [
  {
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    content: '너무 좋아요 어쩌구',
    name: '김아무개',
    bestReview: true,
    address: '강남구',
    date: '2023-06-13 13:00:00',
    before: [
      'https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg',
      'https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg',
    ],
    after: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
  },
  {
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    content: '너무 좋아요 어쩌구',
    name: '강아무개',
    bestReview: false,
    address: '강남구',
    date: '2023-06-12 11:00:00',
    before: ['https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg'],
    after: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
  },
  {
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    content: '너무 좋아요 어쩌구',
    name: '박아무개',
    bestReview: false,
    address: '강남구',
    date: '2023-03-19',
    before: ['https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg'],
    after: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
  },
  {
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    content: '너무 좋아요 어쩌구',
    name: '박아무개',
    bestReview: false,
    address: '강남구',
    date: '2023-03-19',
    before: ['https://static.cdn.soomgo.com/upload/talkboard/0aad0072-af34-4891-afd5-a492de7534ea.jpeg'],
    after: ['https://live.lge.co.kr/wp-content/uploads/2020/12/2020-closet-clean-03-201211.png'],
  },
  {
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    content: '너무 좋아요 어쩌구',
    name: '박아무개',
    bestReview: false,
    address: '강남구',
    date: '2023-03-19',
    before: ['https://static.cdn.soomgo.com/upload/talkboard/0aad0072-af34-4891-afd5-a492de7534ea.jpeg'],
    after: ['https://live.lge.co.kr/wp-content/uploads/2020/12/2020-closet-clean-03-201211.png'],
  },
];

const dummyBest = {
  id: 4,
  title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
  content: '열다 서비스를 받고 옷입는 시간이 줄었어요 너무 좋아요 어쩌구',
  name: '박아무개',
  bestReview: true,
  address: '강남구',
  date: '2023-03-19',
  before: ['https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg'],
  after: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
};

interface ReviewPageProps {
  reviews: ReviewRes[];
}

// export const getStaticProps = async () => {
//   try {
//     const reviews = getReviews();
//     return { props: { reviews }, revalidate: 60 * 60 };
//   } catch (error) {
//     return { props: { review: null }, revalidate: 60 };
//   }
// };

function ReviewPage({ reviews }: ReviewPageProps) {
  const [page, setPage] = useState(1);
  const [pagedReviews, setPagedReviews] = useState<ReviewRes[]>([]);

  const reviewPaging = (page: number) => {
    setPage(page);

    const startIdx = (page - 1) * 3;
    const endIdx = startIdx + 3;
    setPagedReviews(dummy.filter((review, idx) => idx >= startIdx && endIdx > idx));
  };

  useEffect(() => {
    reviewPaging(page);
  }, []);

  return (
    <S.ReviewContainer>
      <ReviewLayout
        posts={pagedReviews}
        bestReview={dummyBest}
        page={page}
        pageLength={dummy.length}
        pagingHandler={reviewPaging}
      />
    </S.ReviewContainer>
  );
}

export default ReviewPage;
