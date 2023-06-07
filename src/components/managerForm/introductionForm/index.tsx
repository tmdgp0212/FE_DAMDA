import React from 'react';
import * as S from './style';

interface IntroductionFormProps {
  info: string;
  placeholder: string;
}

function IntroductionForm({ info, placeholder }: IntroductionFormProps) {
  return (
    <S.FormInput>
      <span>{info}</span>
      <input type="text" placeholder={placeholder} />
    </S.FormInput>
  );
}

export default IntroductionForm;
