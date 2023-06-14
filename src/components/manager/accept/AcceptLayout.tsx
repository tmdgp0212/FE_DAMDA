import React from 'react';
import { managerAcceptanceType } from '@/types/constants/manager';
import * as S from './accept.styled';

const ManagerDummyData: managerAcceptanceType = {
  id: 1,
  manager: '김민수',
  serviceInfo: {
    serviceDate: '2021-10-10',
    serviceDuration: '10:00',
    servicePerPerson: 2,
    location: '서울시 강남구',
  },

  reservationInfo: {
    parkingAvailable: '지하 주차장에 주차 가능',
    reservationEnter: '공동 현관 출입 가능',
    reservationNote: '주의사항 없음',
    reservationRequest: '없음',
  },
};

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
function AcceptLayout() {
  return (
    <S.AcceptWrapper>
      <S.AcceptTitle>
        {ManagerDummyData.manager} 매니저님! <br /> 서비스요청이 들어왔어요 💁‍♀️
      </S.AcceptTitle>

      <S.AcceptInfoWrapper>
        <h2>서비스 정보입니다</h2>
        <S.AcceptInfoContent>
          {Object.entries(ManagerDummyData.serviceInfo).map(([key, value], index) => (
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
          {Object.entries(ManagerDummyData.reservationInfo).map(([key, value], index) => (
            <S.AcceptInfoItem key={key} className={`span-${index === 1 || index === 2 ? 1 : 2}`}>
              <span>{convertKorean(key)}</span>
              <h3>{value}</h3>
            </S.AcceptInfoItem>
          ))}
        </S.AdditionalInfo>
      </S.AcceptInfoWrapper>

      <S.AcceptButtonWrapper>
        <S.AcceptButton className="reject">거절</S.AcceptButton>
        <S.AcceptButton className="accept">수락</S.AcceptButton>
      </S.AcceptButtonWrapper>
    </S.AcceptWrapper>
  );
}

export default AcceptLayout;
