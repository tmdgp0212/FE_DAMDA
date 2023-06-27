import styled from '@emotion/styled';

export const AcceptWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
`;

export const AcceptTitle = styled.h1`
  font-weight: 900;
  font-size: 20px;
  line-height: 135%;
`;

export const AcceptInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h2 {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }
`;

export const AcceptInfoContent = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1.6fr;

  .span-1 {
    grid-column: span 1;
  }

  .span-2 {
    grid-column: span 2;
  }
`;

export const AcceptInfoItem = styled.div`
  min-height: 6rem;
  padding: 10px 16px;
  ${({ theme }) => theme.border.inputBorder};

  display: flex;
  flex-direction: column;
  gap: 2px;

  h3 {
    font-weight: 800;
    font-size: 18px;
    line-height: 135%;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const AdditionalInfo = styled.div``;

export const AcceptButtonWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const AcceptButton = styled.button`
  width: 100%;
  height: 5.5rem;
  margin-bottom: 5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  font-weight: 800;
  font-size: 19px;
  line-height: 160%;
  text-align: left;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};

  &.accept {
    background-color: ${({ theme }) => theme.colors.main_blue};
    color: #fff;
  }

  &.reject {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.yolda_black_1};
  }
`;

export const YesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 20px;

  gap: 56px;

  h1 {
    font-weight: 800;
    font-size: 18px;
    line-height: 135%;
  }

  button {
    background-color: ${({ theme }) => theme.colors.main_blue};
    color: #fff;
  }
`;

export const NoPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 20px;

  .header {
    display: flex;
    gap: 52px;
    flex-direction: column;

    h1 {
      font-size: 20px;
      font-weight: 900;
      line-height: 135%;
    }
    p {
      font-size: 16px;
      font-weight: 800;
      line-height: 160%;
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.main_blue};
    color: #fff;
    margin-top: 407px;
  }
`;
