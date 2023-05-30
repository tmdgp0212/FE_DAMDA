import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: 7.2rem;
`;

export const MainButtonGroupContainer = styled.div<{ groupIndex: number }>`
  display: grid;
  grid-template-rows: ${({ groupIndex }) => (groupIndex === 0 ? '1fr 2fr 1fr 1fr' : 'repeat(3, 1fr)')};
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
      stroke-width: 1px;
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

export const MainRequestButton = styled.button<{ width?: number }>`
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

  width: ${({ width }) => (width ? `${width}%` : '100%')};
`;

export const MainContentButton = styled.button<{ index?: number }>`
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

export const MainContentSection = styled.section``;

export const MainPersonButton = styled(MainContentButton)<{ itemIndex: number }>`
  padding: 1rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  width: ${({ itemIndex }) => {
    switch (itemIndex) {
      case 0:
        return '50%';
      case 1:
        return '70%';
      case 2:
        return '100%';
    }
  }};

  span {
    font-size: 1.2rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const MainPriceButton = styled(MainContentButton)<{ index: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: ${({ index }) => {
    switch (index) {
      case 0:
        return '100%';
      case 1:
        return '70%';
      case 2:
        return '50%';
    }
  }};

  color: ${({ theme, index }) => {
    switch (index) {
      case 0:
        return theme.colors.yolda_gray_4;
      case 1:
        return theme.colors.yolda_gray_2;
      case 2:
        return theme.colors.yolda_black_1;
    }
  }};
  text-decoration: ${({ index }) => (index === 1 ? 'line-through' : 'none')};
  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
  }
  svg {
    width: 2rem;
    height: 2rem;
    stroke-width: 0.8px;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const MainSvg = styled.h1<{ index: number }>`
  position: absolute;
  bottom: 0;
  right: 0;

  background-image: ${({ index }) => `url(/icons/${index + 1}-person.svg)`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  width: ${({ index }) => {
    switch (index) {
      case 0:
        return '28px';
      case 1:
        return '54px';
      case 2:
        return '85px';
    }
  }};
  height: 46px;
`;

export const MainDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 3.2rem;

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  span {
    font-size: 1.8rem;
    font-weight: 700;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;
