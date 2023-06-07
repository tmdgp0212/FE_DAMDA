import styled from '@emotion/styled';

export const DaySelectionForm = styled.div`
  margin-bottom: 32px;

  > div {
    margin-top: 12px;
  }

  input[name='day'] {
    display: none;
  }

  input[name='day'] {
    & + label {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.yolda_gray_3};
      font-size: 14px;

      &:not(:last-child) {
        margin-right: 6px;
      }
    }

    &:checked + label {
      border: none;
      color: #ffffff;
      background-color: ${({ theme }) => theme.colors.main_blue};
    }
  }
`;
