import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const SwiperContainer = styled.div`
  .main_swiper {
    width: 100%;
    height: 250px;
  }

  .gallery {
    display: flex;
    position: relative;
    top: -35px;
    gap: 10px;

    .swiper-slide {
      overflow: hidden;
      position: relative;
      width: 70px;
      height: 70px;
      border-radius: 5px;
      box-sizing: border-box;
      border: 2px solid transparent;

      img {
        object-fit: cover;
      }
    }

    .swiper-slide-thumb-active {
      padding: 0;
      border: 2px solid ${theme.colors.main_blue};
    }
  }
`;
