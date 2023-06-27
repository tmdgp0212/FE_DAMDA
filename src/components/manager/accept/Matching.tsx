import React from 'react';
import * as S from '@/components/manager/accept/accept.styled';
import { managerAcceptanceType } from '@/types/constants/manager';
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
function Matching({
  data,
  handleAccept,
}: {
  data: managerAcceptanceType;
  handleAccept: ({ status }: { status: 'YES' | 'NO' }) => void;
}) {
  const { serviceInfo, reservationInfo, manager } = data;
  return (
    <S.AcceptWrapper>
      <S.AcceptTitle>
        {manager} 매니저님! <br /> 서비스요청이 들어왔어요 💁‍♀️
      </S.AcceptTitle>

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

      <S.AcceptInfoWrapper>
        <h2>상세 정보입니다.</h2>
        <S.AdditionalInfo>
          {Object.entries(reservationInfo).map(([key, value], index) => (
            <S.AcceptInfoItem key={key} className={`span-${index === 1 || index === 2 ? 1 : 2}`}>
              <span>{convertKorean(key)}</span>
              <h3>{value}</h3>
            </S.AcceptInfoItem>
          ))}
        </S.AdditionalInfo>
      </S.AcceptInfoWrapper>

      <S.AcceptButtonWrapper>
        <S.AcceptButton
          className="reject"
          onClick={() =>
            handleAccept({
              status: 'NO',
            })
          }
        >
          거절
        </S.AcceptButton>
        <S.AcceptButton
          className="accept"
          onClick={() =>
            handleAccept({
              status: 'YES',
            })
          }
        >
          수락
        </S.AcceptButton>
      </S.AcceptButtonWrapper>
    </S.AcceptWrapper>
  );
}

export default Matching;
