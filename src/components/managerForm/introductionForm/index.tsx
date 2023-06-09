import React, { ChangeEvent, useState } from 'react';
import * as S from './style';
import Image from 'next/image';

interface IntroductionFormProps {
  info: string;
  placeholder: string;
  register: any;
}

function IntroductionForm({ info, placeholder, register }: IntroductionFormProps) {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputCleaerHandler = () => {
    setInputValue('');
  };

  return (
    <S.FormInput>
      <span>{info}</span>

      <S.InputWrapper>
        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          {...register(info)}
          onChange={inputChangeHandler}
        />

        {inputValue.length > 0 && (
          <S.InputClearButton type="button" onClick={inputCleaerHandler}>
            <Image src="/icons/input-clear-icon.svg" alt="input-clear-icon" fill />
          </S.InputClearButton>
        )}
      </S.InputWrapper>
    </S.FormInput>
  );
}

export default IntroductionForm;
