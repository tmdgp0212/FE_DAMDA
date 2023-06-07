import styled from '@emotion/styled';

export const FieldExperienceForm = styled.div`
  margin-bottom: 32px;

  p {
    margin-top: 4px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.yolda_gray_3};
    ${({ theme }) => theme.font.regular_14}
  }

  textarea {
    width: 100%;
    height: 139px;
    padding: 14px 16px;
    border-radius: 5px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.yolda_gray_3};
      ${({ theme }) => theme.font.light_14}
    }
  }
`;

export const Count = styled.p<{ textLength: number }>`
  color: ${({ theme, textLength }) => (textLength > 150 ? theme.colors.red_1 : theme.colors.yolda_gray_2)};
  text-align: right;

  span {
    color: ${({ theme, textLength }) => textLength > 150 && theme.colors.red_1};
  }
`;
