import styled from '@emotion/styled';

export const UserSurveyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const ProgressBar = styled.div``;

export const UserSurveyTitle = styled.div`
  ${({ theme }) => theme.font.bold_19};
  font-weight: 500;
`;

export const UserSurveyFormWrapper = styled.form`
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const UserSurveyFormTitle = styled.h1`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 2rem;
`;

export const UserSurveyFormInputWrapper = styled.div<{
  hasspan?: boolean;
}>`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 1.2rem;
  }
  .input {
    height: 6rem;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1rem 1.6rem;
    ${({ theme }) => theme.border.inputBorder};
    p {
      color: ${({ theme }) => theme.colors.yolda_gray_2};
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    }
    input {
      width: 100%;
      border: none;
      font-weight: 800;
      font-size: 16px;
      line-height: 135%;
      color: ${({ theme }) => theme.colors.yolda_black_1};

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${({ theme }) => theme.colors.yolda_gray_5};
      }
    }
  }
`;

export const UserSurveyAddressSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  .title {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  .address {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    height: 5.5rem;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #212121;

    svg {
      width: 14px;
      height: 14px;
    }

    ${({ theme }) => theme.border.inputBorder};
  }
`;

export const UserSurveyFormSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 1.8rem;
  }

  .select {
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.8rem;
    height: 5.5rem;
    ${({ theme }) => theme.border.inputBorder};
    span {
      width: 70%;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    svg {
      width: 24px;
      height: 24px;
      padding: 0 0.5rem;
    }
  }
`;

export const UserSurveyFormSelectBox = styled.div`
  display: flex;
  padding: 1.2rem 0.8rem;
  border: 1px solid #212121;
  border-top: none;
  border-radius: 0 0 5px 5px;
  flex-direction: column;
  margin-top: -5px;
  box-sizing: border-box;
  .select-item {
    display: flex;
    padding: 1.2rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    border: 2px solid #fff;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.sub_blue_2};
    }
  }
`;
