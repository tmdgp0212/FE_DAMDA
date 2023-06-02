import styled from '@emotion/styled';
import theme from './theme';
import { motion } from 'framer-motion';

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
  margin-bottom: -20px;
  z-index: 1;
  cursor: default;

  span {
    display: block;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 16px;
  width: ${theme.size.max_width};
  overflow: hidden;

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

export const Slider = styled.div`
  display: flex;
  overflow-x: scroll;
  width: calc(130 * 3 + 16 * 2);
  height: 130px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideItem = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 5px;
  scroll-snap-align: 'center';
  overflow: hidden;
  z-index: 0;

  img {
    object-fit: cover;
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
    background-color: red;
    border: 1px solid ${theme.colors.main_blue};
    border-radius: 5px;
  }

  .review_container {
    padding: 10px;
    border: 1px solid ${theme.colors.yolda_black_1};
    border-radius: 5px;
    cursor: default;
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
