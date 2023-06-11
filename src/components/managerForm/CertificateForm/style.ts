import styled from '@emotion/styled';

export const CertificateForm = styled.div`
  margin-bottom: 32px;

  h3 {
    margin-top: 24px;
  }

  > span {
    display: block;
    margin-top: 4px;
    margin-bottom: 16px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.yolda_gray_4};
  }

  > button {
    width: 100%;
    height: 55px;
    border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};
    border-radius: 5px;
    background-color: #ffffff;
  }

  ul {
    padding-top: 17px;
    border: 1px solid #000000;
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
  }
`;

export const SelectButton = styled.button<{ isEtcClicked: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: ${({ isEtcClicked }) => isEtcClicked && '16px'};
  cursor: pointer;
`;

export const OptionButton = styled.button`
  width: 100%;
  height: 51px;
  padding: 0 32px;
  border: none;
  color: #000000;
  background-color: #ffffff;
  outline: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #ccecff;
  }
`;
