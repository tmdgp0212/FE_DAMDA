import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MenuContainer = styled(motion.div)`
  display: flex;
  justify-content: right;
  position: fixed;
  top: ${theme.size.header_height};
  /* top: 0; */
  left: 0;
  width: 100vw;
  height: 100vh;
  height: calc(100vh - ${theme.size.header_height});
  backdrop-filter: blur(4px);
  z-index: 9;
  transition: all 0.2;
`;

export const MenuBar = styled(motion.div)`
  width: 278px;
  height: 100vh;
  padding: 42px 25px;
  background-color: #fff;
`;

export const Section = styled.div`
  margin-bottom: 20px;

  .title {
    display: flex;
    align-items: center;
    height: 37px;
    color: ${theme.colors.yolda_gray_3};
    font-size: 1.4rem;
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
