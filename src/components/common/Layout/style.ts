import styled from '@emotion/styled';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;
  overflow-y: scroll;
  margin: 0 auto;
  width: 360px;
  height: 100vh;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 810px) {
    //모바일 대응
    width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* @media (max-width: 1200px) {
    //태블릿 대응
    width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }
  } */
`;
