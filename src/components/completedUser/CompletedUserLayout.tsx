import React from 'react';
import * as S from '@/styles/CompletedUser.styled';

interface CompletedUserProps {
  code: string;
  copyMessageRef: React.MutableRefObject<HTMLDivElement | null>;
  isError: boolean;
  isLoading: boolean;
  copy: () => void;
}

function CompletedUserLayout({ code, copyMessageRef, isLoading, isError, copy }: CompletedUserProps) {
  if (isError)
    return (
      <S.CompletedUserContainer>
        <div className="error">유효하지 않은 접근입니다</div>
      </S.CompletedUserContainer>
    );
  if (isLoading)
    return (
      <S.CompletedUserContainer>
        <div className="loading">
          데이터를 불러오는 중입니다. <br />
          잠시만 기다려주세요.
        </div>
      </S.CompletedUserContainer>
    );
  return (
    <S.CompletedUserContainer>
      <S.ThanksTitle>
        서비스를 이용해주셔서 감사합니다!
        <br />
        🙇‍♂️
      </S.ThanksTitle>
      <S.MainContent>
        <S.Paragraph>
          옷장정리 서비스는 만족스러우셨나요? <br />
          만족하셨다면 열다 서비스를 지인분들에게 추천해주세요!
        </S.Paragraph>

        <div>
          <S.SemiTitle>코드를 통해 지인분이 신청하시면</S.SemiTitle>
          <S.FlexBox>
            <S.Box className="coupon">
              <div className="icon"></div>
              <div className="text to">고객님께는</div>
              <div className="text benefit">할인쿠폰 증정!</div>
            </S.Box>
            <S.Box className="sale">
              <div className="icon"></div>
              <div className="text to">지인분께는</div>
              <div className="text benefit">서비스 20% 할인!</div>
            </S.Box>
          </S.FlexBox>
        </div>
        <div>
          <S.SemiTitle>아래 박스를 눌러 복사하세요 :)</S.SemiTitle>
          <S.Box onClick={copy}>
            <div>추천인 코드</div>
            <div className="code">{code}</div>
          </S.Box>
        </div>
      </S.MainContent>

      <S.TextBox ref={copyMessageRef}>
        코드가 복사되었습니다. <br />
        신청 폼 코드 칸에 붙여넣어주세요 :)
      </S.TextBox>

      <S.MoreBenefit>
        <S.SemiTitle>추가 혜택!</S.SemiTitle>

        <S.Paragraph>
          열다 서비스 설문조사 참여하시고
          <br />
          <b>열다 15,000원 할인 쿠폰</b>
          <br />
          또는 <b>스타벅스 아메리카노 기프티콘</b> 받아가세요~
        </S.Paragraph>
        <a href="https://tally.so/r/wQ14ql" target="_blank">
          설문조사 하러가기
        </a>
      </S.MoreBenefit>
    </S.CompletedUserContainer>
  );
}

export default CompletedUserLayout;
