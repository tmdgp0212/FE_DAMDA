import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const CheckModal = styled.div`
  width: ${theme.size.max_width};
  padding: 52px 20px 138px;
  z-index: 20;
  background-color: #ffffff;
`;

export const Header = styled.header`
  h1 {
    margin-bottom: 47px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
  }

  p {
    margin-bottom: 32px;
    font-size: 18px;
    font-weight: 800;
    line-height: 135%;
  }
`;

export const InputContents = styled.div`
  padding: 24px 16px;
  margin-bottom: 36px;
  border: 1px solid ${theme.colors.yolda_black_1};
  border-radius: 5px;
`;

export const Content = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  h3,
  dt {
    color: ${theme.colors.yolda_gray_2};
    font-size: 14px;
    line-height: 160%;
  }

  h3 {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  dt {
    margin-right: 8px;
    white-space: nowrap;
  }

  dd {
    color: ${theme.colors.yolda_black_1};
    font-size: 14px;
    font-weight: 600;
  }
`;
