import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const ReviewItem = styled.div`
  padding: 12px 0 32px;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 214px;
  border-radius: 5px;

  img {
    object-fit: cover;
    object-position: center;
  }
`;

export const Badges = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 8px;
  gap: 6px;
  z-index: 1;
`;

export const ReviewAuth = styled.div`
  ${theme.font.regular_12}
  display: flex;
  gap: 5px;
  margin-top: 5px;
  color: ${theme.colors.yolda_gray_3};
  cursor: default;

  .time {
    margin-left: 16px;
  }
`;

export const ReviewTitle = styled.h4`
  ${theme.font.regular_14}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
`;
