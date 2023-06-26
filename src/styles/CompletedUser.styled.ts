import styled from '@emotion/styled';
import theme from './theme';
import { keyframes } from '@emotion/react';

const PopUp = keyframes`
0% { transform: translateY(150px)}
10% { transform: translateY(0px)}
90% { transform: translateY(0px)}
100% { transform: translateY(150px)}
`;

export const CompletedUserContainer = styled.div`
  padding: 20px;

  .loading,
  .error {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ThanksTitle = styled.div`
  ${theme.font.bold_19}
  cursor: default;
`;

export const SemiTitle = styled.div`
  ${theme.font.bold_16}
  margin-bottom: 12px;
  cursor: default;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin: 50px 0;
`;

export const Paragraph = styled.p`
  ${theme.font.regular_14}
  cursor: default;

  b {
    ${theme.font.bold_14}
  }
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const Box = styled.div`
  ${theme.font.regular_14}
  position: relative;
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: default;

  &.coupon .icon {
    background-image: url('/icons/coupon.png');
    background-size: 70%;
    transform: rotate(-20deg);
  }

  &.sale .icon {
    background-image: url('/icons/sale.png');
    background-size: 55%;
  }

  .icon {
    padding-top: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .text {
    ${theme.font.bold_14}
    position: absolute;

    &.to {
      top: 15%;
      left: 10%;
    }

    &.benefit {
      bottom: 15%;
      right: 10%;
    }
  }

  .code {
    ${theme.font.bold_18_135}
    cursor: pointer;
  }
`;

export const TextBox = styled.div`
  ${theme.font.bold_14}
  display: none;
  position: fixed;
  width: 300px;
  padding: 5px 10px;
  left: calc(50% - 150px);
  bottom: 100px;
  background-color: #fff;
  border: 1px solid;
  border-radius: 5px;
  animation: ${PopUp} 5s;
  cursor: default;
`;

export const MoreBenefit = styled.div`
  a {
    ${theme.font.bold_16}
    display: block;
    width: 250px;
    margin: 24px 0;
    padding: 10px;
    color: #fff;
    background-color: ${theme.colors.main_blue};
    border: 1px solid #000;
    border-radius: 5px;
  }
`;
