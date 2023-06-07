import styled from '@emotion/styled';

interface MarginProps {
  large?: boolean;
}

export const ManagerFormContainer = styled.div`
  padding: 8px 20px 172px;
`;

export const ManagerFormHeader = styled.header`
  margin-bottom: 47px;

  svg {
    margin-bottom: 20px;
    font-size: 24px;
  }

  h1 {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const Headline = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 135%;
`;

export const StyleWrapper = styled.div<MarginProps>`
  margin-bottom: ${({ large }) => (large ? '72px' : '32px')};
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  line-height: 160%;
`;

export const DaySelectionForm = styled.div`
  margin-bottom: 32px;

  input[name='day'] {
    display: none;
  }

  input[name='day'] {
    & + label {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.yolda_gray_3};
      font-size: 14px;

      &:not(:last-child) {
        margin-right: 6px;
      }
    }

    &:checked + label {
      border: none;
      color: #ffffff;
      background-color: ${({ theme }) => theme.colors.main_blue};
    }
  }
`;

export const CertificateForm = styled.div`
  margin-bottom: 32px;

  span {
    display: block;
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

export const CertificateButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
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
`;

export const FieldExperienceForm = styled.div`
  margin-bottom: 32px;

  p {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.yolda_gray_3};
    ${({ theme }) => theme.font.regular_14}
  }

  textarea {
    width: 100%;
    height: 139px;
    padding: 14px 16px;
    border-radius: 5px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.yolda_gray_3};
      ${({ theme }) => theme.font.light_14}
    }
  }

  span {
    display: block;
    padding: 8px;
    color: ${({ theme }) => theme.colors.yolda_gray_2};
    ${({ theme }) => theme.font.regular_12}
    text-align: right;
  }
`;
