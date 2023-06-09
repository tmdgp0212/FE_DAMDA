import React, { ChangeEvent, useState } from 'react';

import * as G from '../style';
import * as S from './style';

function FieldExperienceForm({ dispatch }: any) {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'FIELD_EXPERIENCE', payload: { field_experience: e.target.value } });
    setEnteredText(e.target.value);
  };

  return (
    <S.FieldExperienceForm>
      <G.SubTitle>
        정리수납 관련 현장 경험이 있으시다면
        <br />
        상세하게 입력해주세요.
      </G.SubTitle>

      <p>현장에서 옷장정리를 한 경험을 위주로 입력해주세요.</p>

      <textarea
        name="field_experience"
        id=""
        placeholder="현장 파견 20회 이상, 옷장 정리 경험 10회 이상"
        style={{ resize: 'none' }}
        onChange={textChangeHandler}
      ></textarea>

      <S.Count textLength={count}>
        <span>{count}</span> / 150
      </S.Count>
    </S.FieldExperienceForm>
  );
}

export default FieldExperienceForm;
