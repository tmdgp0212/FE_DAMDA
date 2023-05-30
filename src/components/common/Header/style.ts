import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 25px;
  width: 100%;
  height: 52px;
  /* color: ${theme.colors.main_blue}; */
  border-bottom: 1px solid ${theme.colors.yolda_gray_5};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  z-index: 5;
`;

export const Logo = styled.h1`
  width: 53px;
  height: 25px;
  background-image: url('/icons/Yolda_logo.svg');
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 12px;
`;

export const EstimateButton = styled.button`
  border: none;
  outline: none;
  width: 88px;
  height: 35px;
  color: #fff;
  font-weight: 500;
  font-size: 1.6rem;
  background-color: ${theme.colors.main_blue};
  border-radius: 6px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
`;

export const LoginButton = styled(Icon)`
  background-image: url('/icons/login-icon.svg');
`;

export const SideMenuButton = styled(Icon)`
  background-image: url('/icons/menu-icon.svg');
`;
