import theme from '@/styles/theme';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ProgressBar = keyframes`
  0% {width: 0%}
  100% {width: 100%}
`;

export const SwiperContainer = styled.div`
  position: relative;
  width: calc(${theme.size.max_width} - 52px);
  height: 214px;

  .swiper-slide {
    width: 100px;
    height: 214px;
  }

  .progress_bar {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${theme.colors.yolda_gray_4};
    z-index: 1;

    &::after {
      display: block;
      height: 100%;
      background-color: ${theme.colors.main_blue};
      animation: ${ProgressBar} 6s linear infinite;
      content: '';
    }
  }
`;
