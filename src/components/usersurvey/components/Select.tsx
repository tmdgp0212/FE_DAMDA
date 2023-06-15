import React, { useEffect, useState } from 'react';
import { UserSurveyFormSelectProps } from '@/types/components/form';
import { UserSurveyFormSelectBox, UserSurveyFormSelectWrapper } from '@/styles/survey.styled';
import { convertQuestionIdentifierToPlaceholder } from '@/utils';
import { AnimatePresence, Variants } from 'framer-motion';
import { AiOutlineDown } from 'react-icons/ai';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';

function Select({ category, placeholder, title, handleUpdateFormValue, questionNumber }: UserSurveyFormSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');

  const { userSurveyForm } = useUserSurveyForm();

  const handleOnOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectOnClick = (category: string) => {
    setSelected(category);
    setIsOpen(false);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: category,
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
      const currentData = userSurveyForm.find((data) => data.questionNumber === questionNumber);
      if (currentData) {
        setSelected(currentData.answer);
      }
    }
  }, []);

  return (
    <UserSurveyFormSelectWrapper>
      <span className="title">{title}</span>
      <div className="select" onClick={handleOnOpen}>
        <span>{selected === '' ? convertQuestionIdentifierToPlaceholder(placeholder) : selected}</span>
        <AiOutlineDown />
      </div>
      <AnimatePresence>
        {isOpen && (
          <UserSurveyFormSelectBox>
            {category.map((data) => (
              <div className="select-item" key={data.id} onClick={() => handleSelectOnClick(data.category)}>
                {data.category}
              </div>
            ))}
          </UserSurveyFormSelectBox>
        )}
      </AnimatePresence>
    </UserSurveyFormSelectWrapper>
  );
}

export default React.memo(Select);
