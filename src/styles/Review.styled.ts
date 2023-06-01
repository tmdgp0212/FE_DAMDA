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

  span {
    display: block;
    line-height: 1.35;
  }
`;

export const TitleMedium = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 12px 0;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Description = styled.p`
  padding: 0 25px;
  line-height: 1.6;

  span {
    display: block;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${theme.size.max_width};
  overflow: hidden;
`;

export const Slider = styled(motion.div)`
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideItem = styled(motion.div)`
  width: 130px;
  height: 130px;
  border-radius: 5px;
  scroll-snap-align: 'center';
  overflow: hidden;

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
`;

export const Reviews = styled.div`
  padding: 0 25px;
`;

export const BestReview = styled.div``;

export const AllReview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const Pagenation = styled.div`
  padding: 25px;
`;
