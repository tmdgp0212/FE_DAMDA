import styled from '@emotion/styled';

interface MarginProps {
  large?: boolean;
}

// Common
export const Headline = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 135%;
`;

export const StyleWrapper = styled.div<MarginProps>`
  margin-bottom: ${({ large }) => (large ? '72px' : '32px')};
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  line-height: 160%;
`;

// Styled-Components
export const ManagerFormContainer = styled.form`
  padding: 8px 20px 172px;
`;

export const ManagerFormHeader = styled.header`
  margin-bottom: 47px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    margin-bottom: 20px;
    border: none;
    color: ${({ theme }) => theme.colors.yolda_black_1};
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  svg {
    font-size: 24px;
  }

  h1 {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const ManagerSupportButton = styled.button<{ isValid: boolean }>`
  display: flex;
  align-items: center;
  width: 154px;
  height: 50px;
  padding: 10px;
  border: 1px solid ${({ theme, isValid }) => (isValid ? theme.colors.yolda_black_1 : theme.colors.yolda_gray_4)};
  border-radius: 5px;
  color: ${({ theme, isValid }) => (isValid ? '#ffffff' : theme.colors.yolda_gray_4)};
  background-color: ${({ theme, isValid }) => (isValid ? theme.colors.main_blue : '#ffffff')};
  font-weight: ${({ isValid }) => (isValid ? '800' : '500')};
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'not-allowed')};
`;
