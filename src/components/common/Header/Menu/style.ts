import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MenuBackground = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  top: ${theme.size.header_height};
  left: calc(50% - ${theme.size.max_width} / 2);
  width: ${theme.size.max_width};
  height: 100%;
  backdrop-filter: blur(4px);
  transition: all 0.2;
  z-index: 9;

  @media (max-width: 420px) {
    width: 100vw;
    left: 0;
  }

  @media (min-width: 810px) {
    left: inherit;
    right: 0px;
  }
`;

export const MenuBarContainer = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: calc(50% - ${theme.size.max_width} / 2);
  width: 278px;
  height: 100%;
  padding: 42px 25px;
  background-color: #fff;

  @media (max-width: 420px) {
    right: 0;
  }

  @media (min-width: 810px) {
    right: 0px;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;

  .title {
    display: flex;
    align-items: center;
    height: 37px;
    color: ${theme.colors.yolda_gray_3};
    font-size: 1.4rem;
    cursor: default;
  }

  .links {
    a {
      display: flex;
      align-items: center;
      height: 43px;
      padding: 0 20px;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;
