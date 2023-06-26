import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    font-size: 16px;
    font-weight: 800;
    line-height: 160%;
  }
  p {
    font-size: 14px;
  }

  .head {
    display: flex;
    justify-content: start;
    gap: 1.6rem;
    padding: 12px 16px;

    font-size: 16px;
    font-weight: 600;
    line-height: 160%;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .example-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const Example = styled.div<{ hours: number }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .title {
    font-size: 16px;
    font-weight: 800;
    line-height: 160%;
  }
  .img {
    width: 100%;
    height: ${(props) => (props.hours === 3 ? '160px' : '212px')};
    background-image: url('/img/example/${(props) => props.hours}hours.png');
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    border: 1px solid #000;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    font-size: 14px;
    line-height: 160%;

    strong {
      font-weight: 800;
    }
  }
`;
