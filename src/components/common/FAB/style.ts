import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const MainFABContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 200px;
  right: calc(50% - ${theme.size.max_width} / 2);
  color: #000;
  flex-direction: column;
  z-index: 3;

  @media (max-width: 420px) {
    right: 0px;
  }

  @media (min-width: 810px) {
    bottom: 80px;
    right: ${theme.size.max_width};
  }

  @media (min-width: 1200px) {
    right: calc(50% - ${theme.size.max_width});
  }
`;

export const MainFABButton = styled.button<{ color: string }>`
  cursor: pointer;
  width: 5.8rem;
  height: 4.5rem;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #212121;
  border-radius: 5px 0 0 5px;
  padding: 0 0.8rem;
  background-color: ${({ color }) => color};

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
