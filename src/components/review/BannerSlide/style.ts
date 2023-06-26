import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SlideWrapper = styled.div<{ reverse: boolean | undefined }>`
  display: flex;
  gap: 14px;
  width: calc((130px * 3 + 14px * 2) * 2 + 14px);

  ${({ reverse }) =>
    reverse &&
    css`
      position: absolute;
      top: 144px;
      right: 0px;
    `}
`;

export const SlideItems = styled(motion.div)`
  display: flex;
  width: calc(130px * 3 + 14px * 2);
  gap: 14px;
`;

export const SlideItem = styled(motion.div)`
  width: 130px;
  height: 130px;
  overflow: hidden;
  border-radius: 5px;

  img {
    object-fit: cover;
    object-position: center;
  }
`;
