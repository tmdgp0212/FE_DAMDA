import theme from '@/styles/theme';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Yolda = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 270px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 274px;
  background-color: #fff;
  border-radius: 5px;

  p {
    ${theme.font.bold_16}
    width: 120px;
    color: ${theme.colors.main_blue};
    line-height: 1.35;
  }
`;

export const Form = styled(Link)`
  ${theme.font.bold_16}
  padding: 14px;
  color: #fff;
  background-color: ${theme.colors.main_blue};
  border: 1px solid ${theme.colors.yolda_black_1};
  border-radius: 5px;

  &.white {
    color: #000;
    background-color: #fff;
  }
`;

export const Copyright = styled.address`
  ${theme.font.light_14}
  position: absolute;
  left: 0;
  bottom: -40px;
  width: 270px;
  color: ${theme.colors.yolda_gray_5};
  text-align: center;
`;
