import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  color: ${theme.colors.main_blue};
  border-bottom: 1px solid ${theme.colors.yolda_gray_5};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  z-index: 5;
`;
