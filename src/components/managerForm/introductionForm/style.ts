import styled from '@emotion/styled';

export const FormInput = styled.div`
  position: relative;

  &:first-child {
    margin-top: 32px;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    position: absolute;
    top: 10px;
    left: 16px;
    color: ${({ theme }) => theme.colors.yolda_gray_2};
    font-size: 14px;
    font-weight: 600;
    z-index: 10;
  }
`;

export const InputWrapper = styled.div<{ isError?: string }>`
  position: relative;

  input {
    width: 100%;
    height: 61px;
    padding: 29px 42px 10px 16px;
    border: 1px solid ${({ theme, isError }) => (isError ? theme.colors.red_1 : theme.colors.yolda_black_1)};
    border-radius: 5px;
    font-size: 16px;
    font-weight: 800;
    line-height: 135%;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.yolda_gray_5};
      font-size: 16px;
      font-weight: 800;
      line-height: 135%;
    }
  }
`;

export const Icon = styled.button`
  position: absolute;
  bottom: 11px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 10px;
  left: 65px;
  color: ${({ theme }) => theme.colors.red_1};
  font-size: 14px;
  font-weight: 500;
`;
