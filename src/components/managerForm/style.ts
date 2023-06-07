import styled from '@emotion/styled';

export const ManagerFormContainer = styled.div`
  padding: 8px 20px 172px;
`;

export const ManagerFormHeader = styled.header`
  margin-bottom: 47px;

  svg {
    margin-bottom: 20px;
    font-size: 24px;
  }

  h1 {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const Headline = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 135%;
`;

export const StyleWrapper = styled.div`
  margin-bottom: 32px;
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  line-height: 160%;
`;

export const DaySelectionForm = styled.div`
  margin-bottom: 32px;

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
