import React from 'react';
import * as S from '../../styles/Sale.styled';
import MainResellerGraph from '@/components/main/MainResellerGraph';

function SalePage() {
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
      </S.SaleGraphContainer>
    </S.SaleContainer>
  );
}

export default SalePage;
