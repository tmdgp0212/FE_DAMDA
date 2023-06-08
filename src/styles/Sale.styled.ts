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
  background-image: url('/img/sale_main1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70%;
  height: 100%;
`;

export const ImgCover = styled.div`
  background: linear-gradient(to right, #ffffff 20.04%, rgba(255, 255, 255, 0) 95%);
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

// 옷장 정리 페이지 이동

export const SaleClosetContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.padding.mobile};
`;

export const PopupContainer = styled.div<{ onPopup?: boolean }>`
  transition: max-height 0.3s ease-in-out;
  width: 100%;
  max-height: ${({ onPopup }) => (onPopup ? '70px' : '150px')};
  height: auto;
  border: ${({ onPopup }) => (onPopup ? '1px solid black' : '2px solid #0061FF')};
  border-radius: 0.6rem;
  padding: 1rem;
  overflow: hidden;
  margin-top: 1.4rem;
  h2 {
    ${({ theme }) => theme.font.bold_19};
  }
`;

export const PopupWrap = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 700;
  }
`;
export const PopupTitle = styled.div`
  border-bottom: 1px solid black;
  padding: 0 10px 10px;
  margin-bottom: 10px;
`;

export const PopupDesc = styled.p`
  padding: 0 10px;
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
  background-image: url('/img/sale_main2.png');
  background-repeat: no-repeat;
  background-size: 140%;
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
