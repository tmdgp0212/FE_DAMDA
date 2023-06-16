import React, { useEffect, useState } from 'react';
import { UserSurveyFormRadioProps } from '@/types/components/form';
import { UserSurveyFormRadioWrapper } from '@/styles/survey.styled';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';

const variants: Variants = {
  hover: {
    backgroundColor: '#0061FF',
    color: '#fff',
  },
  animate: {
    backgroundColor: '#0061FF',
    color: '#fff',
  },
};
function Radio({ category, title, placeholder, questionNumber, handleUpdateFormValue }: UserSurveyFormRadioProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const { userSurveyForm } = useUserSurveyForm();

  const handleOnClick = (index: number) => {
    setSelectedIndex(index);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: category[index].category,
      questionIdentifier: placeholder,
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

  useEffect(() => {
    if (!!userSurveyForm) {
      const isExist = userSurveyForm.find((data) => data.questionNumber === questionNumber);
      if (isExist) {
        setSelectedIndex(category.findIndex((data) => data.category === isExist.answer));
      }
    }
  }, []);

  return (
    <UserSurveyFormRadioWrapper>
      <span className="title">{title}</span>
      <div className="radio-wrapper">
        {category.map((data, index) => (
          <motion.div
            className="radio-item"
            key={data.id}
            variants={variants}
            animate={selectedIndex === index ? 'animate' : ''}
            onClick={() => handleOnClick(index)}
            whileHover="hover"
          >
            <span>{data.category}</span>
          </motion.div>
        ))}
      </div>
      {placeholder === 'SERVICEDURATION' && (
        <Link href="/kakao">
          <span>몇 시간 정도 걸릴 지 상담받고 싶어요!</span>
        </Link>
      )}
    </UserSurveyFormRadioWrapper>
  );
}

export default Radio;
