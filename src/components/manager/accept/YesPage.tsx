import React from 'react';
import { YesPageWrapper } from '@/components/manager/accept/accept.styled';
import * as S from '@/components/manager/accept/accept.styled';
import { managerAcceptanceType } from '@/types/constants/manager';
import { useRouter } from 'next/router';

const convertKorean = (key: string) => {
  switch (key) {
    case 'serviceDate':
      return '서비스 일시';
    case 'serviceDuration':
      return '신청 시간';
    case 'servicePerPerson':
      return '투입 인원';
    case 'location':
      return '위치';
    case 'parkingAvailable':
      return '주차 여부';
    case 'reservationEnter':
      return '출입 방법';
    case 'reservationNote':
      return '유의사항';
    case 'reservationRequest':
      return '요청사항';
  }
};
function YesPage({ data }: { data: managerAcceptanceType }) {
  const { serviceInfo, manager } = data;
  const router = useRouter();

  return (
    <YesPageWrapper>
      <h1>
        {manager} 매니저님! <br />
        요청을 수락해주셔서 감사합니다!
      </h1>
      <p>검토가 완료되면 연락드리겠습니다!</p>

      <S.AcceptInfoWrapper>
        <h2>서비스 정보입니다</h2>
        <S.AcceptInfoContent>
          {Object.entries(serviceInfo).map(([key, value], index) => (
            <S.AcceptInfoItem key={key} className={`span-${index === 1 || index === 2 ? 1 : 2}`}>
              <span>{convertKorean(key)}</span>
              <h3>{value}</h3>
            </S.AcceptInfoItem>
          ))}
        </S.AcceptInfoContent>
      </S.AcceptInfoWrapper>

      <S.AcceptButton onClick={() => router.push('/')}>확인</S.AcceptButton>
    </YesPageWrapper>
  );
}

export default YesPage;
