import React from 'react';

import * as G from '../style';
import * as S from './style';

function DaySelectionForm() {
  return (
    <S.DaySelectionForm>
      <G.SubTitle>활동 가능한 요일을 선택해주세요.</G.SubTitle>

      <div>
        <input type="checkbox" name="day" id="mon" />
        <label htmlFor="mon">월</label>

        <input type="checkbox" name="day" id="tue" />
        <label htmlFor="tue">화</label>

        <input type="checkbox" name="day" id="wed" />
        <label htmlFor="wed">수</label>

        <input type="checkbox" name="day" id="thu" />
        <label htmlFor="thu">목</label>

        <input type="checkbox" name="day" id="fri" />
        <label htmlFor="fri">금</label>

        <input type="checkbox" name="day" id="sat" />
        <label htmlFor="sat">토</label>

        <input type="checkbox" name="day" id="sun" />
        <label htmlFor="sun">일</label>
      </div>
    </S.DaySelectionForm>
  );
}

export default DaySelectionForm;
