import React, { useEffect, useState } from 'react';
import * as S from '../../styles/Review.styled';
import ReviewLayout from '@/components/review/ReviewLayout';
import { ReviewRes } from '@/types/review';

const dummy: ReviewRes[] = [
  {
    id: 1,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '김아무개',
    isBest: false,
    location: '강남구',
    time: '2023-06-04',
    imageBefore: [
      'https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg',
      'https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg',
    ],
    imageAfter: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
  },
  {
    id: 2,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '강아무개',
    isBest: false,
    location: '강남구',
    time: '2023-05-19',
    imageBefore: ['https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg'],
    imageAfter: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
  },
  {
    id: 3,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '박아무개',
    isBest: false,
    location: '강남구',
    time: '2023-03-19',
    imageBefore: ['https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg'],
    imageAfter: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
  },
  {
    id: 4,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '박아무개',
    isBest: false,
    location: '강남구',
    time: '2023-03-19',
    imageBefore: ['https://static.cdn.soomgo.com/upload/talkboard/0aad0072-af34-4891-afd5-a492de7534ea.jpeg'],
    imageAfter: ['https://live.lge.co.kr/wp-content/uploads/2020/12/2020-closet-clean-03-201211.png'],
  },
  {
    id: 5,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '박아무개',
    isBest: false,
    location: '강남구',
    time: '2023-03-19',
    imageBefore: ['https://static.cdn.soomgo.com/upload/talkboard/0aad0072-af34-4891-afd5-a492de7534ea.jpeg'],
    imageAfter: ['https://live.lge.co.kr/wp-content/uploads/2020/12/2020-closet-clean-03-201211.png'],
  },
];

const dummyBest = {
  id: 4,
  title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
  body: '열다 서비스를 받고 옷입는 시간이 줄었어요 너무 좋아요 어쩌구',
  userName: '박아무개',
  isBest: true,
  location: '강남구',
  time: '2023-03-19',
  imageBefore: ['https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg'],
  imageAfter: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
};

function ReviewPage() {
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
