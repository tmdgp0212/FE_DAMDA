import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CarouselWrapper = styled(motion.div)`
  position: relative;
  width: 32rem;
  height: 32rem;

  .mySwiper {
    overflow: visible;
  }

  .swiper-item {
    width: 32rem;
    height: 32rem;
  }
`;

export const CarouselItemWrapper = styled(motion.div)`
  position: relative;
`;

export const UserReviewWrapper = styled.div<{
  img: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .image {
    width: 100%;
    height: 100%;
    background-image: url(${({ img }) => '/img/UserReview' + img + '.png'});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.main_blue};
    border-bottom: none;
  }

  .desc {
    padding: 1rem;
    width: 100%;
    height: 30%;
    display: flex;
    gap: 0.6rem;
    flex-direction: column;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.yolda_black_1};

    h1 {
      font-size: 1.4rem;
      font-weight: 400;
    }

    p {
      font-size: 1.8rem;
      font-weight: 800;
      line-height: 135%;
    }
  }
`;

// git test
