import styled from '@emotion/styled';

export const PopupContainer = styled.div<{ popup?: boolean; openHeight: string; closeHeight: string }>`
  transition: max-height 0.3s ease-in-out;
  width: 100%;
  max-height: ${({ popup, openHeight, closeHeight }) => (popup ? openHeight : closeHeight)};
  border: ${({ popup }) => (popup ? '2px solid #0061FF' : '1px solid black')};
  border-radius: 0.6rem;
  padding: 1rem;
  overflow: hidden;
  h2 {
    ${({ theme }) => theme.font.bold_19};
  }
`;

export const PopupContent = styled.div`
  width: 90%;
`;

export const PopupWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  span {
    font-weight: 700;
  }
`;
export const PopupTitle = styled.div`
  border-bottom: 1px solid black;
  padding: 0 10px 10px;
  margin-bottom: 10px;
`;

export const PopupDesc = styled.p`
  padding: 0 5px 0 10px;
  strong {
    font-weight: 700;
  }
`;
