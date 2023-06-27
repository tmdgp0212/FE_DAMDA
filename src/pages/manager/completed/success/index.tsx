import React from 'react';
import * as S from '@/styles/CompletedSuccess.styled';
import { useRouter } from 'next/router';
function Success() {
  const router = useRouter(); // useRouter 훅을 사용하여 router 객체를 가져옴

  const handleConfirm = () => {
    router.push('/'); // 루트 경로('/')로 이동
  };
  return (
    <S.SuccessContainer>
      <S.SuccessContent>
        <S.SuccessTitle>
          저희 열다를 위해
          <br />
          항상 도움주셔서 감사합니다.
        </S.SuccessTitle>
        <S.SuccessText>
          정리 전, 후 사진 제출이 완려되었습니다.
          <br />
          앞으로도 잘 부탁드립니다!🙇‍♀️
        </S.SuccessText>
      </S.SuccessContent>
      <S.SuccessButton onClick={handleConfirm}>확인</S.SuccessButton>
    </S.SuccessContainer>
  );
}

export default Success;
