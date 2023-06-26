import styled from '@emotion/styled';

export const RadioButtonFormContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:last-child {
    margin-bottom: 72px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 800;
    line-height: 160%;
  }
`;

export const InputRadioGroup = styled.div<{ isMainJobExist?: boolean | null }>`
  display: flex;
  gap: 12px;
  margin-bottom: ${({ isMainJobExist }) => isMainJobExist && '16px'};

  input[type='radio'],
  input[type='radio'] {
    display: none;
  }

  label {
    width: 100%;
    cursor: pointer;
  }

  input[type='radio'],
  input[type='radio'] {
    & + label {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.yolda_gray_3};
      font-size: 14px;
    }

    &:checked + label {
      border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};
      font-size: 16;
      font-weight: 800;
      line-height: 160%;
      color: #ffffff;
      background-color: ${({ theme }) => theme.colors.main_blue};
    }
  }
`;
