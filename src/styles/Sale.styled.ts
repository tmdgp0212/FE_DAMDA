import styled from '@emotion/styled';

export const SaleContainer = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  height: fit-content;
  position: relative;
  margin-bottom: 10rem;
  margin-top: -4rem;
  h1 {
    ${({ theme }) => theme.font.bold_24_135};
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
  background-image: url('/img/saleMain1.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

export const ImgCover = styled.div`
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
  padding-left: 2rem;
`;

// 옷장 정리 페이지 이동

export const SaleClosetContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.padding.mobile};
  h1 {
    margin-bottom: 1rem;
  }
`;

// 그래프 섹션
export const SaleGraphContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.padding.mobile};
`;

// 견적 신청
export const SaleEstimateContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 46rem;
  padding: ${({ theme }) => theme.padding.mobile};
  padding: 0 2rem;
  overflow: hidden;
  position: relative;
`;

export const EstimateTitle = styled.div`
  position: absolute;
  z-index: 1;
`;

export const EstimateImg = styled.div`
  width: 100%;
  height: 65%;
  background-image: url('/img/saleMain2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 10rem;
  p {
    ${({ theme }) => theme.font.regular_14};
  }
`;

export const EstimateCover = styled.div`
  width: 100%;
  height: 15%;
  background: linear-gradient(to top, rgba(255, 255, 255, 1%), #fff);
  position: absolute;
  top: 10rem;
  left: 0;
  display: flex;
`;

export const SaleButton = styled.div`
  width: 60%;
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.main_blue};
  border-radius: 0.6rem;
  padding: 0.6rem 1rem 0.6rem 2rem;
  position: absolute;
  bottom: 6rem;
  display: flex;
  justify-content: space-between;
  span {
    ${({ theme }) => theme.font.bold_19};
  }
`;
