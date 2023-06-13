import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

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
