import React, { ChangeEvent, useState } from 'react';

import * as G from '../style';
import * as S from './style';

function FieldExperienceForm({ register }: { register: any }) {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredText(e.target.value);
  };

  const characterCountWithoutSpaces = enteredText.replace(/\s/g, '').length;

  return (
    <S.FieldExperienceForm>
      <G.SubTitle>
        정리수납 관련 현장 경험이 있으시다면
        <br />
        상세하게 입력해주세요.
      </G.SubTitle>

      <p>현장에서 옷장정리를 한 경험을 위주로 입력해주세요.</p>

      <textarea
        name=""
        id=""
        placeholder="현장 파견 20회 이상, 옷장 정리 경험 10회 이상"
        style={{ resize: 'none' }}
        onChange={textChangeHandler}
        {...register('field_experience')}
      ></textarea>

      <S.Count textLength={enteredText.length}>
        <span>{characterCountWithoutSpaces}</span> / 150
      </S.Count>
    </S.FieldExperienceForm>
  );
}

export default FieldExperienceForm;
