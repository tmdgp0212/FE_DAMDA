import styled from '@emotion/styled';

export const CategoryFilterButton = styled.button<{ isActive: boolean }>`
  height: 35px;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};
  border-radius: 5px;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#000000')};
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.main_blue : '#ffffff')};
  outline: none;
  transition: background-color 200ms ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme, isActive }) => (isActive ? theme.colors.main_blue : theme.colors.yolda_gray_5)};
  }
`;
