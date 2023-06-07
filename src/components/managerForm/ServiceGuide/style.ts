import styled from '@emotion/styled';

export const ServiceGuide = styled.div`
  margin-bottom: 72px;

  > div {
    margin-top: 16px;
  }
`;

export const GuideDetail = styled.div`
  padding: 16px;
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};
  border-radius: 5px;
  background-color: #ccecff;

  .description {
    margin-bottom: 8px;
    ${({ theme }) => theme.font.regular_14}
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.yolda_black_1};
    font-size: 14px;
    font-weight: 600;
    line-height: 185%;
  }
`;

export const InputCheckbox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 12px 16px;

  input {
    margin-right: 19px;
  }
`;
