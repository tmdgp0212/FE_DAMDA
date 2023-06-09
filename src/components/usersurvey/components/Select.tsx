import React, { useState } from 'react';
import { UserSurveyFormSelectProps } from '@/types/components/form';
import { UserSurveyFormSelectBox, UserSurveyFormSelectWrapper } from '@/styles/survey.styled';
import { convertQuestionIdentifierToPlaceholder } from '@/utils';
import { AnimatePresence } from 'framer-motion';
import { AiOutlineDown } from 'react-icons/ai';

function Select({ category, placeholder, title }: UserSurveyFormSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');

  const handleOnOpen = () => {
    setIsOpen((prev) => !prev);
  };
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
              <div className="select-item" key={data.id} onClick={() => {}}>
                {data.category}
              </div>
            ))}
          </UserSurveyFormSelectBox>
        )}
      </AnimatePresence>
    </UserSurveyFormSelectWrapper>
  );
}

export default Select;
