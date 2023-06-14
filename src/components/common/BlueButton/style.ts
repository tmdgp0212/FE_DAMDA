import styled from '@emotion/styled';

export const BlueButton = styled.button<{ width?: string }>`
  cursor: pointer;
  width: ${({ width }) => width || '15.5rem'};
  height: 5.5rem;
  background-color: ${({ theme }) => theme.colors.main_blue};
  border: 1px solid black;
  border-radius: 0.6rem;
  outline: none;
  color: #fff;
  ${({ theme }) => theme.font.bold_19};
`;
