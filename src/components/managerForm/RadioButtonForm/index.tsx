import React from 'react';
import { inputRadioText } from '@/constants/inputRadioText';
import * as S from './style';

function RadioButtonForm() {
  return (
    <>
      {inputRadioText.map((text) => {
        const { title, buttonText1, buttonText2, name, id1, id2 } = text;

        return (
          <S.RadioButtonFormContainer key={title}>
            <h3>{title}</h3>

            <S.InputRadioGroup>
              <input type="radio" name={name} id={id1} />
              <label htmlFor={id1}>{buttonText1}</label>

              <input type="radio" name={name} id={id2} />
              <label htmlFor={id2}>{buttonText2}</label>
            </S.InputRadioGroup>
          </S.RadioButtonFormContainer>
        );
      })}
    </>
  );
}

export default RadioButtonForm;
