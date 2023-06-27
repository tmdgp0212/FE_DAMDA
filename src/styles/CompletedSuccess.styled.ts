import styled from '@emotion/styled';

export const SuccessContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.mobile};
  margin-top: 4rem;
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16.5rem;
`;

export const SuccessTitle = styled.div`
  ${({ theme }) => theme.font.bold_24_135};
`;

export const SuccessText = styled.div`
  ${({ theme }) => theme.font.bold_16};
`;

export const SuccessButton = styled.button`
  cursor: pointer;
  ${({ theme }) => theme.font.bold_16};
  width: 100%;
  height: 5.5rem;
  background-color: transparent;
  border: 1px solid #181818;
  border-radius: 5px;
  text-align: left;
  padding-left: 1.6rem;
`;
