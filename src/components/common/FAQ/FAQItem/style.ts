import styled from '@emotion/styled';

export const FAQItem = styled.li<{ isFAQOpen: boolean }>`
  width: 320px;
  background-color: #ffffff;
  border: ${({ theme, isFAQOpen }) =>
    isFAQOpen ? `2px solid ${theme.colors.main_blue}` : `1px solid ${theme.colors.yolda_black_1}`};
  border-radius: 5px;
`;

export const FAQCard = styled.article`
  position: relative;
  padding: 10px 36px 10px 10px;
  font-size: 14px;
  line-height: 160%;

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
  }
`;

export const CardHeader = styled.header`
  strong {
    margin-bottom: 2px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 135%;
  }
`;

export const CardContent = styled.div<{ isFAQOpen: boolean }>`
  transition: height 300ms ease-in-out;
  overflow: hidden;

  strong {
    font-weight: 700;
  }

  a {
    color: ${({ theme }) => theme.colors.sub_blue_2};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.sub_blue_1};
      text-decoration: none;
    }
  }
`;
