import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Layout = styled.div`
  @media (min-width: 810px) {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
  overflow-y: scroll;
  margin: 0 auto;
  max-width: ${theme.size.max_width};
  height: 100vh;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 420px) {
    //모바일 대응
    width: 100vw;
    max-width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Side = styled.div`
  display: none;

  @media (min-width: 810px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
