import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Link from 'next/link';

export const SupportOverlay = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - ${theme.size.max_width} / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${theme.size.max_width};
  height: 100%;
  background-color: rgba(66, 66, 66, 0.88);
  z-index: 20;

  @media screen and (min-width: 810px) {
    position: absolute;
    top: -52px;
    left: 0;
    align-items: flex-start;
    height: 940px;
  }
`;

export const SupportModal = styled.div<{ textCenter: boolean }>`
  width: 346px;
  height: 348px;
  z-index: 20;
  padding: 58px 16px;
  border: 1px solid ${theme.colors.yolda_black_1};
  border-radius: 5px;
  background-color: #ffffff;
  text-align: ${({ textCenter }) => textCenter && 'center'};

  @media screen and (min-width: 810px) {
    position: relative;
    top: calc(100vh / 3);
  }

  img {
    display: inline-block;
    margin-bottom: 16px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-bottom: 26px;
    font-size: 18px;
    font-weight: 800;
    line-height: 135%;
  }

  p {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 135%;
  }

  strong {
    display: block;
    margin-bottom: 39px;
    font-weight: 600;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
