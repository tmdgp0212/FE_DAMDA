import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const PolicyModal = styled.div`
  ${theme.font.regular_12}
  padding: 35px 25px;
  color: ${theme.colors.yolda_black_1};

  strong {
    ${theme.font.bold_14}
  }
`;

export const Title = styled.h2`
  ${theme.font.bold_16}
  margin-bottom: 20px;
  color: ${theme.colors.yolda_black_1};
`;
