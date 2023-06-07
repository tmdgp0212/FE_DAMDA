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

export const ManagerSupportButton = styled.button`
  display: flex;
  align-items: center;
  width: 154px;
  height: 50px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.yolda_gray_4};
  background-color: #ffffff;
`;
