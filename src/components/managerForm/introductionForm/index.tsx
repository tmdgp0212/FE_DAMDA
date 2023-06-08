import React from 'react';
import * as S from './style';

interface IntroductionFormProps {
  info: string;
  placeholder: string;
  register: any;
}

function IntroductionForm({ info, placeholder, register }: IntroductionFormProps) {
  return (
    <S.FormInput>
      <span>{info}</span>
      <input type="text" placeholder={placeholder} {...register(info)} />
    </S.FormInput>
  );
}

export default IntroductionForm;
