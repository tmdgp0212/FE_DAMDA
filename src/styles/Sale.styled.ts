import styled from '@emotion/styled';

export const SaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  height: fit-content;
  position: relative;
  margin-bottom: 10rem;
  margin-top: -4rem;
  h1 {
    font-size: 2.4rem;
    font-weight: 900;
    line-height: 1.35;
    margin-bottom: 0.6rem;
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6;
  }
`;

// Sale Title 부분 스타일
export const SaleTitleContainer = styled.div`
  width: 100%;
  height: 38.6rem;
  position: relative;
`;

export const SaleTitleImg = styled.div`
  background-image: url('/img/sale_main1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70%;
  height: 100%;
`;

export const ImgCover = styled.div`
  background: linear-gradient(90deg, #ffffff 20.04%, rgba(255, 255, 255, 0) 95%);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2rem 3.3rem;
`;

// 판매 대행 절차
export const SaleProcedureContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 51rem;
  padding: ${({ theme }) => theme.padding.mobile};
`;

export const SaleProcedureWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 3rem;
`;

export const SaleProcedure = styled.div`
  width: 100%;
  height: 85%;
  border: 1px solid black;
  border-radius: 0.6rem;
  padding: 0 2rem;
`;

export const SaleProcedureTitle = styled.div`
  width: 77.7%;
  height: 4rem;
  background-color: #fff;
  position: absolute;
  border: 1px solid black;
  border-radius: 0.6rem;
  line-height: 4rem;
  padding: 0 1.5rem;
  margin-top: -2rem;
`;

export const SaleProcedureImg = styled.div<{ img?: string }>`
  width: 100%;
  height: 18.7rem;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  margin-top: 3.5rem;
  border-radius: 0.6rem;
`;

// 그래프 섹션
export const SaleGraphContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.padding.mobile};
`;
