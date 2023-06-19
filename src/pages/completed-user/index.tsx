import React, { useState } from 'react';
import * as S from '@/styles/CompletedUser.styled';
import { useRouter } from 'next/router';

function CompletedUser() {
  const router = useRouter();
  const [code, setCode] = useState('');

  console.log(router.query.id);

  return (
    <S.TextBoxContainer>
      <S.TextBox>
        [열다] 서비스를 지인분들께 추천하신 후 실제로 서비스를 이용하신다면 고객님과 지인 분들 모두 파격적인 혜택을
        드립니다!
        <br />
        <br />
        기존 고객 혜택: 추천하신 지인분이 신청해주 실 때마다 [열다] 서비스 &ldquo;15,000원 할인&rdquo; 쿠폰 증정(중복
        적용 가능)*
        <br />
        <br />
        지인 혜택: 서비스 신청폼 내 &ldquo;추천인 코드 또 는 프로모션 코드&rdquo;란에 아래 추천인 코드를 입력하면 20%
        할인 적용!
        <br />
        주변 분들에게 많은 추천 부탁드립니다.🙌
        <br />
        [추천인 코드: {code}]
        <br />
        <br />
        더욱 좋은 서비스를 만들기 위해 간단한 설문 조사를 요청드립니다.🙏
        <br />
        <br />
        설문조사 응답 시
        <br />
        [열다] 서비스 &ldquo;15,000원 할인&rdquo; 쿠폰 또는 4,500원 상당의 스타벅스 기프티콘 증정
        <br />
        <br />
        설문조사링크
        <br />
        <a href="https://tally.so/r/wQ14ql" target="_blank">
          https://tally.so/r/wQ14ql
        </a>
      </S.TextBox>
    </S.TextBoxContainer>
  );
}

export default CompletedUser;
