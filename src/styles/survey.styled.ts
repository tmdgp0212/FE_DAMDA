import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const UserSurveyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const ProgressBar = styled.div``;

export const UserSurveyTitle = styled.div`
  ${({ theme }) => theme.font.bold_19};
  font-weight: 500;
`;

export const UserSurveyFormWrapper = styled.form`
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const UserSurveyFormTitle = styled.h1`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 2rem;
`;

export const UserSurveyFormInputWrapper = styled.div<{
  hasspan?: boolean;
}>`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 1.2rem;
  }
  .input {
    height: 6rem;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1rem 1.6rem;
    ${({ theme }) => theme.border.inputBorder};
    p {
      color: ${({ theme }) => theme.colors.yolda_gray_2};
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    }
    input {
      width: 100%;
      border: none;
      font-weight: 800;
      font-size: 16px;
      line-height: 135%;
      color: ${({ theme }) => theme.colors.yolda_black_1};

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${({ theme }) => theme.colors.yolda_gray_5};
      }
    }
  }
`;

export const UserSurveyAddressSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 0.8rem;
  }

  h1 {
    font-weight: 900;
    font-size: 20px;
  }

  .address {
    margin-top: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    height: 5.5rem;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #212121;

    svg {
      width: 14px;
      height: 14px;
    }

    ${({ theme }) => theme.border.inputBorder};
  }

  .address-show {
    height: 6rem;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1rem 1.6rem;
    ${({ theme }) => theme.border.inputBorder};

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
  }
  .address-span {
    margin: 1.2rem 0 0 0;
  }
`;

export const UserSurveyFormAddressWrapper = styled.div<{ isSubAddressOpen: boolean }>`
  margin-top: -0.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  border: 1px solid #212121;
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 1.2rem 0.8rem;

  .address-list {
    display: flex;
    flex-direction: ${({ isSubAddressOpen }) => (isSubAddressOpen ? 'row' : 'column')};
    min-height: 20rem;
    max-height: 20rem;
  }

  .address-item {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    padding: 1.2rem;
    border-radius: 5px;
    border: 2px solid white;
  }
`;

export const UserSurveyFormSubAddressWrapper = styled.div`
  display: flex;
  width: 100%;

  .main {
    flex-basis: 50%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
  .sub {
    flex-shrink: 0;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.8rem;
      background: #c7c7c7;
    }
  }

  .add {
    font-weight: 400;
    font-size: 16px;
    line-height: 135%;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.yolda_gray_4};
  }
`;

export const UserSurveyFormSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.8rem;

  .title {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 1.8rem;
  }

  .select {
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.8rem;
    height: 5.5rem;
    ${({ theme }) => theme.border.inputBorder};
    span {
      width: 70%;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    svg {
      width: 24px;
      height: 24px;
      padding: 0 0.5rem;
    }
  }
`;

export const UserSurveyFormSelectBox = styled.div`
  display: flex;
  padding: 1.2rem 0.8rem;
  border: 1px solid #212121;
  border-top: none;
  border-radius: 0 0 5px 5px;
  flex-direction: column;
  margin-top: -5px;
  box-sizing: border-box;
  .select-item {
    display: flex;
    padding: 1.2rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    border: 2px solid #fff;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.sub_blue_2};
    }
  }
`;

export const UserSurveyFormRadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.9rem;

  .title {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  .radio-wrapper {
    display: flex;
    gap: 12px;

    .radio-item {
      flex-basis: 100%;
      height: 5rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      border: 1px solid #a6a6a6;
      border-radius: 5px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.yolda_gray_4};
      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    text-decoration-line: underline;
    color: ${({ theme }) => theme.colors.main_blue};
  }
`;

export const UserSurveyFormNextBox = styled(motion.div)`
  margin-top: 6rem;
  margin-bottom: 6rem;
  width: 45%;
  height: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
  border-radius: 5px;
  cursor: revert;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.yolda_gray_4};
`;

export const UserSurveyFormDateWrapper = styled.div`
  .title {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  .select-body {
    margin-top: 1.2rem;
    width: 100%;
    height: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    ${({ theme }) => theme.border.inputBorder};

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .rdp {
    margin: -1rem 0 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    ${({ theme }) => theme.border.inputBorder};
    border-radius: 0px 0px 5px 5px;
    border-top: none;
  }

  .rdp-month {
    padding: 1.4rem 1rem;
  }

  .dayOfWeekMatcher {
    font-weight: 700;
  }

  .rdp-day_today {
    font-weight: normal;
  }

  .rdp-day {
    font-size: 1.8rem;
    border-radius: 5px;

    &:hover {
      border: 3px solid ${({ theme }) => theme.colors.sub_blue_1};
      background: inherit !important;
    }
  }

  .rdp-day_selected {
    border: 3px solid ${({ theme }) => theme.colors.sub_blue_1};
    color: ${({ theme }) => theme.colors.yolda_black_1};
    background-color: inherit;
  }

  .caption {
    display: flex;
    justify-content: space-between;

    svg {
      width: 20px;
      height: 20px;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }

  .select-wrapper {
    margin-top: 1.2rem;
  }

  .select-list {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(3, 1fr);

    .select-item {
      margin-top: 1.2rem;
      flex-basis: 100%;
      height: 5rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      border: 1px solid #a6a6a6;
      border-radius: 5px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.yolda_gray_4};

      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;

export const UserSurveyFormAdditionalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  span {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }
  .input {
    height: 6rem;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1rem 1.6rem;
    ${({ theme }) => theme.border.inputBorder};
    p {
      color: ${({ theme }) => theme.colors.yolda_gray_2};
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    }
    input {
      width: 100%;
      border: none;
      font-weight: 800;
      font-size: 16px;
      line-height: 135%;
      color: ${({ theme }) => theme.colors.yolda_black_1};

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${({ theme }) => theme.colors.yolda_gray_5};
      }
    }
  }

  .checkbox {
    display: flex;
    padding: 5px 1.6rem;
    gap: 1.6rem;
  }
`;

export const UserSurveyFormTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  span {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  textarea {
    resize: none;
    height: 14rem;
    width: 100%;
    padding: 1.4rem 1.6rem;
    ${({ theme }) => theme.border.inputBorder};
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
    &:active {
      outline: none;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const UserSurveyRequirementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.2rem;

  h2 {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  .require-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .additional {
      color: ${({ theme }) => theme.colors.yolda_gray_4};
    }

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;

      strong {
        font-weight: 800;
      }
    }

    ul {
      margin-left: 1.6rem;
      li {
        list-style: inside;
      }
    }
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
      width: 1.6em;
      height: 1.6rem;
      border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
      border-radius: 5px;
    }

    label {
      font-weight: 800;
      font-size: 16px;
      line-height: 160%;
    }
  }
`;

export const UserSurveyFormSubmitButton = styled(motion.div)`
  width: 45%;
  height: 5rem;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
  border-radius: 5px;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.yolda_gray_4};
`;
