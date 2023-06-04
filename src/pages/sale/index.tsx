import React from 'react';
import * as S from '../../styles/Sale.styled';
import Image from 'next/image';
import { MainReSellerContent } from '@/styles/Main.styled';
import MainResellerGraph from '@/components/main/MainResellerGraph';
import { BsLine } from 'react-icons/bs';
import { FiArrowDownRight, FiArrowUpLeft } from 'react-icons/fi';
import BlueButton from '@/components/common/BlueButton';

const popupData = [
  {
    title: '나에게는 안입는 옷이 누군가에게는 It item!',
    subtitle: '수익창출',
    description: '옷장안에 잠들어 있는 옷으로 부가 수익을 창출하세요.',
  },
  // ... 다른 popup 데이터 객체들
];

function SalePage() {
  const [isPopup, setIsPopup] = React.useState(false);

  const onPopupControll = () => {
    setIsPopup(!isPopup);
  };

  return (
    <S.SaleContainer>
      <S.SaleTitleContainer>
        <S.SaleTitleImg></S.SaleTitleImg>
        <S.ImgCover>
          <h1>
            안 입는 옷도
            <br />
            새로운 방향으로
          </h1>
          <p>
            서비스를 이용하신 후에
            <br />
            정리된 안 입는 옷은
            <br />
            열다에서 전문 셀러를 통해 수익화하세요.
          </p>
        </S.ImgCover>
      </S.SaleTitleContainer>
      <S.SaleProcedureContainer>
        <h1>
          판매 대행 절차를
          <br />
          알아볼까요?
        </h1>
        <S.SaleProcedureWrap>
          <S.SaleProcedure>
            <S.SaleProcedureTitle>1단계. 판매할 의류 잡화 정보 수집 </S.SaleProcedureTitle>
            <S.SaleProcedureImg img="/img/sale_card1.png" />
          </S.SaleProcedure>
        </S.SaleProcedureWrap>
      </S.SaleProcedureContainer>
      <S.SaleClosetContainer>
        <h1>
          안 입는 옷으로
          <br /> 판매수익도 챙기세요.
        </h1>
        {popupData.map((popup, index) => (
          <S.PopupContainer key={index} onPopup={isPopup}>
            <S.PopupWrap>
              <div>
                <S.PopupTitle>
                  <p>{popup.title}</p>
                  <h2>{popup.subtitle}</h2>
                </S.PopupTitle>
                <S.PopupDesc>{popup.description}</S.PopupDesc>
              </div>
              {isPopup ? (
                <FiArrowUpLeft style={{ fontSize: '3rem' }} onClick={onPopupControll} />
              ) : (
                <FiArrowDownRight style={{ fontSize: '3rem' }} onClick={onPopupControll} />
              )}
            </S.PopupWrap>
          </S.PopupContainer>
        ))}
        <BlueButton title="옷장 정리 서비스 바로가기" width="100%" />
      </S.SaleClosetContainer>
      <S.SaleGraphContainer>
        <h1>
          많이 버리게 되어도
          <br />
          아쉽지 않아요
        </h1>
        <p style={{ marginBottom: '1.6rem' }}>
          열다를 통해 안 입으시는 옷을 판매하세요
          <br />
          나에게는 하나의 수익이 되지만,
          <br />또 다른 누군가에게는 가치있는 옷일 수 있으니까요
        </p>
        <MainResellerGraph />
        <BlueButton title="상담 신청" width="50%" />
      </S.SaleGraphContainer>
      <S.SaleEstimateContainer>
        <S.EstimateTitle>
          <h1>
            안입는 옷을
            <br />
            정리 하는 게 <br />
            귀찮으신가요?
          </h1>
          <p>
            지금 옷장정리 서비스를 이용하고
            <br />
            바로 수익 창출까지 해보세요!!
          </p>
        </S.EstimateTitle>
        <S.EstimateCover />
        <S.EstimateImg />
        <BlueButton title="무료 견적 받기" width="50%" />
      </S.SaleEstimateContainer>
    </S.SaleContainer>
  );
}

export default SalePage;
