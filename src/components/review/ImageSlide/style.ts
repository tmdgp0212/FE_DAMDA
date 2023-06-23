import theme from '@/styles/theme';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ProgressBar = keyframes`
  0% {width: 0%}
  100% {width: 100%}
`;

export const SwiperContainer = styled.div<{ isBest: boolean | undefined }>`
  position: relative;
  width: calc(${theme.size.max_width} - 42px);
  height: 214px;

  @media (max-width: 420px) {
    width: calc(100vw - 52px);
  }

  .swiper-pagination {
    display: flex;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${theme.colors.yolda_gray_4};

    .swiper-pagination-bullet {
      display: none;
      height: 100%;
      width: 50%;
      background-color: ${theme.colors.main_blue};
      border-radius: 0;

      &.swiper-pagination-bullet-active {
        display: block;
        ${({ isBest }) =>
          isBest
            ? css`
                animation: ${ProgressBar} 6s linear infinite;
              `
            : css`
                animation: ${ProgressBar} 3s linear infinite;
              `};
      }
    }
  }

  .swiper-slide {
    position: relative;
    height: 214px;

    img {
      object-fit: cover;
    }

    &::after {
      ${theme.font.regular_12}

      display: block;
      position: absolute;
      left: 10px;
      bottom: 10px;
      padding: 2px 8px;
      color: #fff;
      background-color: rgba(22, 22, 22, 0.5);
      border-radius: 5px;
    }

    &.after::after {
      content: 'after';
    }

    &.before::after {
      content: 'before';
    }
  }
`;
