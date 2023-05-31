import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const ReviewItem = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 214px;

  img {
    object-fit: cover;
    object-position: center;
  }
`;

export const Badges = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 22px;
    color: ${theme.colors.red_1};
    border: 1px solid ${theme.colors.red_1};
  }
`;

export const ReviewTitle = styled.h4``;
export const ReviewAuth = styled.div`
  text-align: right;
`;
