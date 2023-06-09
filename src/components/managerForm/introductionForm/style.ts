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
    ${({ theme }) => theme.font.bold_14}
    color: ${({ theme }) => theme.colors.yolda_gray_2};
    font-weight: 600;
    z-index: 10;
  }

  input {
    width: 100%;
    height: 61px;
    padding: 29px 16px 0;
    border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};
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

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputClearButton = styled.button`
  position: absolute;
  top: 32px;
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
  cursor: pointer;
`;
