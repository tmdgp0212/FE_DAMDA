import styled from '@emotion/styled';
import theme from './theme';

export const TextBoxContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  ${theme.font.bold_14}
  padding: 20px;
`;
