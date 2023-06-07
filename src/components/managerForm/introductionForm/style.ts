import styled from '@emotion/styled';

export const FormInput = styled.div`
  position: relative;

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
