import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  height: fit-content;
  position: relative;
`;

export const MainTitleContainer = styled.div`
  padding: ${({ theme }) => theme.padding.mobile};
  background-image: url('/img/MainClothBg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 2rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.3rem;

  h1 {
    margin-top: 10%;
    width: 60%;
    font-size: 3rem;
    font-weight: 900;
    line-height: 42px;
    color: ${({ theme }) => theme.colors.yolda_black_1};
    background: linear-gradient(90deg, #ffffff 23.04%, rgba(255, 255, 255, 0) 100%);
  }

  p {
    width: 50%;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.yolda_black_1};
    background: linear-gradient(90deg, #ffffff 23.04%, rgba(255, 255, 255, 0) 100%);
  }
`;

export const MainContentContainer = styled.div`
  margin-top: -24%;
  width: 100%;
  padding: ${({ theme }) => theme.padding.mobile};
  display: flex;
  flex-direction: column;
`;

export const MainButtonGroupContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1fr;
`;

export const MainRequestGroupContainer = styled.div`
  display: flex;

  .desc {
    padding: 1rem;
    background: linear-gradient(90deg, #ffffff 23.04%, rgba(255, 255, 255, 0) 100%);
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;

    svg {
      width: 24px;
      height: 24px;
    }

    p {
      font-size: 2rem;
      font-weight: 500;
      line-height: 28px;
    }
  }

  .btn {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;

export const MainRequestButton = styled.button`
  background-color: ${({ theme }) => theme.colors.main_blue};
  border: 1px solid #212121;
  padding: 1.6rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  line-height: 19px;
  height: 5.5rem;
  text-align: start;
`;

export const MainContentButton = styled.button<{ index: number }>`
  background-color: #fff;
  border: 1px solid #212121;
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.yolda_black_1};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 19px;
  height: 5.5rem;

  width: ${({ index }) => (index === 3 ? '80%' : '100%')};
  justify-self: ${({ index }) => (index === 3 ? 'end' : 'start')};
`;
