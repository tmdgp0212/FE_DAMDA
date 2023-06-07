import React from 'react';

import * as G from '../style';
import * as S from './style';

function FieldExperienceForm() {
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
      ></textarea>

      <span>0 / 150</span>
    </S.FieldExperienceForm>
  );
}

export default FieldExperienceForm;
