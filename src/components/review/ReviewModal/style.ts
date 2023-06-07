import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${theme.size.header_height};
  left: calc(50% - ${theme.size.max_width} / 2);
  width: ${theme.size.max_width};
  height: 100%;
  transition: all 0.2;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 11;

  @media (max-width: 420px) {
    width: 100vw;
    left: 0;
  }
`;

export const Modal = styled.div`
  overflow-y: scroll;
  width: 80%;
  max-height: 80%;
  background-color: #fff;
  border-radius: 5px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  padding: 10px;
  height: 30px;
`;

export const Gallery = styled.div``;

export const TransitionButtons = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  bottom: -18px;
  gap: 10px;
  z-index: 5;
`;

export const TransitionButton = styled.button`
  ${theme.font.bold_14}
  width: 100%;
  height: 36px;
  text-align: left;
  background-color: #fff;
  border: 1px solid ${theme.colors.yolda_black_1};
  border-radius: 5px;

  &.active {
    background-color: ${theme.colors.sub_blue_3};
  }
`;

export const ReviewDetail = styled.div`
  padding: 0 15px 15px;
`;

export const Badges = styled.div`
  display: flex;
  gap: 5px;
`;

export const Title = styled.h3`
  ${theme.font.bold_16}
`;

export const Auth = styled.div`
  ${theme.font.regular_12}
  padding: 8px 10px;

  .date {
    margin-left: 24px;
  }
`;

export const Body = styled.div`
  ${theme.font.regular_14}
  line-height: 1.6;
`;
