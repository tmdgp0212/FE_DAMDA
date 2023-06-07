import styled from '@emotion/styled';
import theme from './theme';
import { css } from '@emotion/react';

export const ReviewContainer = styled.div`
  padding-top: 92px;
`;

export const TitleLarge = styled.h2`
  margin-bottom: 20px;
  padding: 0 25px;
  ${theme.font.bold_24}
  cursor: default;

  span {
    display: block;
    line-height: 1.35;
  }
`;

export const TitleMedium = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 53px 0 17px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: default;
`;

export const Description = styled.p`
  position: relative;
  padding: 0 25px;
  line-height: 1.6;
  cursor: default;
  z-index: 1;

  span {
    display: block;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  margin-top: -20px;
  width: ${theme.size.max_width};
  height: calc(130px * 2 + 14px);
  overflow: hidden;

  @media (max-width: 420px) {
    width: 100vw;
  }

  &::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 66px;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
  }
`;

export const ScrollDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 30px;
  cursor: default;
`;

export const Reviews = styled.div`
  padding: 0 25px;
`;

export const BestReview = styled.div`
  .prograss_container {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 214px;
    border: 1px solid ${theme.colors.main_blue};
    border-color: ${theme.colors.main_blue} ${theme.colors.main_blue} none ${theme.colors.main_blue};
    border-radius: 5px;
  }
`;

export const ReviewCard = styled.div<{ isCardOpen: boolean }>`
  position: relative;
  padding: 10px;
  font-size: 14px;
  line-height: 160%;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid ${theme.colors.yolda_black_1};
  border-radius: 5px;
  cursor: pointer;

  .card_header {
    display: grid;
    grid-template-columns: 1fr 14px;
    grid-template-rows: auto auto;
    column-gap: 8px;

    .arrow_icon {
      grid-column-start: 2;
      grid-row-start: span 2;
    }

    .flex_box {
      ${theme.font.regular_14}

      display: flex;
      justify-content: space-between;

      .date {
        color: ${theme.colors.yolda_gray_3};
      }
    }

    .title {
      ${theme.font.bold_18_135}

      ${({ isCardOpen }) =>
        !isCardOpen &&
        css`
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `}
    }
  }

  .card_content {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid ${({ theme }) => theme.colors.yolda_black_1};

    strong {
      font-weight: 700;
    }
  }
`;

export const AllReview = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Pagenation = styled.div`
  ${theme.font.regular_14}
  padding: 25px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;

    .disabled {
    }

    .active {
      ${theme.font.bold_14}
      color: ${theme.colors.main_blue};
    }

    .prev {
      display: block;
      width: 14px;
      height: 14px;
      text-indent: -9999px;
      background-image: url('/icons/angle-left.svg');
    }

    .next {
      display: block;
      width: 14px;
      height: 14px;
      text-indent: -9999px;
      background-image: url('/icons/angle-right.svg');
    }
  }
`;
