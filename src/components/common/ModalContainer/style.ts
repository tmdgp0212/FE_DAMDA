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
  color: ${theme.colors.yolda_black_1};
  background-color: #fff;
  border-radius: 5px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
