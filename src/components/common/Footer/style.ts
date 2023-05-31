import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  color: #fff;
  font-size: 1.4rem;
  background-color: ${theme.colors.main_blue};
`;

export const Folder = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 16px;
  height: 65px;
  cursor: pointer;

  path {
    stroke: #fff;
  }
`;

export const Footer = styled.div`
  padding: 0 16px 24px;

  .company {
    margin-bottom: 22px;
  }

  .contents {
    display: flex;
    flex-direction: column;
    gap: 7px;

    .row {
      display: flex;
      gap: 16px;
      font-weight: 300;
    }
  }

  .rule {
    display: flex;
    gap: 16px;
    margin-top: 22px;
    font-weight: 300;
  }

  .bold {
    font-weight: 600;
  }
`;
