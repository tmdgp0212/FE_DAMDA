import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ClosetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  height: fit-content;
  position: relative;
  margin-bottom: 5rem;
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

// Closet Title 부분 스타일
export const ClosetTitleContainer = styled.div`
  width: 100%;
  height: 38.6rem;
  position: relative;
`;

export const ClosetTitleImg = styled.div<{ backgorundImg: string }>`
  background-image: ${({ backgorundImg }) => `url(${backgorundImg})`};
  background-repeat: no-repeat;
  background-size: cover;
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

// 옷장 정리 방법 (Carousel)

export const ClosetCleanContainer = styled.div`
  max-width: 360px;
  padding-left: 2rem;
  h1 {
    margin-bottom: 2rem;
  }
`;

// 옷장 정리 장점
export const ClosetProContainer = styled.div`
  max-width: 360px;
  height: 52.5rem;
  padding: ${({ theme }) => theme.padding.mobile};
  h1 {
    margin-bottom: 4rem;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TabButton = styled.button<{ active: boolean; width: number }>`
  width: ${({ width }) => width}%;
  height: 4rem;
  border-radius: 0.5rem;
  background-color: ${({ active, theme }) => (active ? theme.colors.main_blue : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#181818')};
  ${({ theme }) => theme.font.bold_16};
  outline: none;
  border: 1.5px solid black;
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const TabContentImg = styled.div<{ backgorundImg: string }>`
  width: 100%;
  height: 25rem;
  background-image: ${({ backgorundImg }) => `url(${backgorundImg})`};
  background-repeat: no-repeat;
  margin-top: 1.5rem;
`;
export const TabContentText = styled.div`
  ${({ theme }) => theme.font.regular_14};
`;

// 전문가 정보
export const ClosetExpertContainer = styled.div`
  max-width: 360px;
  padding: ${({ theme }) => theme.padding.mobile};
  h1 {
    margin-bottom: 4rem;
  }
`;

// 예상 견적
export const ClosetEstimateContainer = styled.div`
  max-width: 360px;
  padding: ${({ theme }) => theme.padding.mobile};
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
`;

export const EstimateButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const EstimateContent = styled.div`
  p {
    font-size: 1.6rem;
    padding-left: 1rem;
    margin: 0.5rem 0;
  }
`;

export const EstimatePayWrap = styled.div`
  display: flex;
`;

export const EstimatePay = styled.div<{ focus: boolean }>`
  width: 50%;
  height: auto;
  padding: 1rem 0rem 0.2rem 1rem;
  color: ${({ focus }) => (focus ? '#181818' : '#858585')};
  border-radius: 0.5rem;
  h2 {
    ${({ theme }) => theme.font.bold_18_135};
  }
`;

export const EstimateImg = styled.div<{ backgorundImg: string }>`
  width: 100%;
  height: 32rem;
  border: 1px solid #181818;
  border-radius: 0.5rem;
  background-image: ${({ backgorundImg }) => `url(${backgorundImg})`};
  background-repeat: no-repeat;
`;

// 후기 모음
export const ClosetReviewContainer = styled.div`
  max-width: 360px;
  padding: ${({ theme }) => theme.padding.mobile};
`;

// 통계 섹션
export const ClosetStatisticsContainer = styled(Swiper)`
  max-width: 360px;
  padding: ${({ theme }) => theme.padding.mobile};
`;

export const StatisticsItem = styled.div`
  width: 32rem;
  height: 18rem;
  border: 1px solid #181818;
  padding: 2.5rem 1.5rem 2.5rem;
`;

export const StatisticsDecs = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
`;

export const StatisticsIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.5rem;
`;

export const StatisticsTitle = styled.div`
  color: ${({ theme }) => theme.colors.main_blue};
  ${({ theme }) => theme.font.bold_19};
  padding-left: 1rem;
`;
