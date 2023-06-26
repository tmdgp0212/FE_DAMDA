import React, { useEffect, useRef, useState } from 'react';
import { UserSurveyFormInputWrapper } from '@/styles/survey.styled';
import { UserSurveyFormStringProps } from '@/types/components/form';
import { convertQuestionIdentifierToKorean } from '@/utils';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';
import useAuthStore from '@/store/auth';
import { useMutation } from '@tanstack/react-query';
import { validateSaleCode } from '@/apis/form';
import Error from '@/components/usersurvey/components/svg/error';
import Success from '@/components/usersurvey/components/svg/success';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  error: {
    borderColor: '#DF001F',
  },
  success: {
    borderColor: '#04D741',
  },

  errorP: {
    color: '#DF001F',
  },
  successP: {
    color: '#04D741',
  },
};

function Input({ handleUpdateFormValue, formData, children }: UserSurveyFormStringProps) {
  const { questionNumber, questionTitle, questionIdentify, placeHolder } = formData;
  const [isValidCode, setIsValidCode] = useState<boolean | null>(null);
  const { userSurveyForm } = useUserSurveyForm();
  const { user } = useAuthStore();
  const { mutate } = useMutation(validateSaleCode, {
    onSuccess: (data) => {
      if (data) {
        setIsValidCode(true);
      } else {
        setIsValidCode(false);
      }
    },
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const isCodeInput = questionIdentify === 'SALECODE';

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const currentData: UserSurveyForm = {
      questionNumber,
      answer: value,
      questionIdentify,
    };
    handleUpdateFormValue((prev) => {
      const isExist = prev.find((data) => data.questionNumber === questionNumber);
      if (isExist) {
        return prev.map((data) => (data.questionNumber === questionNumber ? currentData : data));
      } else {
        return [...prev, currentData];
      }
    });
  };

  const onCodeInputHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length === 0) setIsValidCode(null);

    if (value.length === 6) {
      mutate(value);
    }
  };

  const handleUserData = () => {
    if (!user.data) return;
    const { phoneNumber, username } = user.data;

    if (phoneNumber && questionIdentify === 'APPLICANTCONACTINFO') {
      inputRef.current!.value = phoneNumber;
      handleUpdateFormValue((prev) => {
        const isExist = prev.find((data) => data.questionNumber === questionNumber);
        if (isExist) {
          return prev.map((data) => (data.questionNumber === questionNumber ? { ...data, answer: phoneNumber } : data));
        } else {
          return [...prev, { questionNumber, answer: phoneNumber, questionIdentify }];
        }
      });
    }
    if (username && questionIdentify === 'APPLICANTNAME') {
      inputRef.current!.value = username;
      handleUpdateFormValue((prev) => {
        const isExist = prev.find((data) => data.questionNumber === questionNumber);
        if (isExist) {
          return prev.map((data) => (data.questionNumber === questionNumber ? { ...data, answer: username } : data));
        } else {
          return [...prev, { questionNumber, answer: username, questionIdentify }];
        }
      });
    }
  };

  useEffect(() => {
    if (!!userSurveyForm) {
      const currentData = userSurveyForm.find((data) => data.questionNumber === questionNumber);
      if (currentData) {
        inputRef.current!.value = currentData.answer;
      }
    }
  }, []);

  useEffect(() => {
    handleUserData();
  }, [user]);

  useEffect(() => {
    console.log(isValidCode);
  }, [isValidCode]);

  return (
    <UserSurveyFormInputWrapper>
      {questionTitle && <span>{questionTitle}</span>}
      <motion.div
        className="input"
        variants={variants}
        animate={isValidCode === null ? undefined : isValidCode ? 'success' : 'error'}
      >
        <div className="p-wrapper">
          {questionIdentify && <p>{convertQuestionIdentifierToKorean(questionIdentify)}</p>}

          {isCodeInput && isValidCode !== null && (
            <motion.p variants={variants} animate={isValidCode ? 'successP' : 'errorP'}>
              {!isValidCode ? '유효하지 않은 코드입니다 :(' : '적용되었습니다 :)'}
            </motion.p>
          )}
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder={placeHolder}
            onChange={isCodeInput ? onCodeInputHandler : onChangeHandler}
            ref={inputRef}
            maxLength={isCodeInput ? 6 : undefined}
          />
          {isValidCode !== null ? isValidCode ? <Success /> : <Error /> : null}
        </div>
      </motion.div>

      {children && children}
    </UserSurveyFormInputWrapper>
  );
}

export default Input;
