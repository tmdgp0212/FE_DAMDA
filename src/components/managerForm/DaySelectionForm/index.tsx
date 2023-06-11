import React, { ChangeEvent } from 'react';

import * as G from '../style';
import * as S from './style';

function DaySelectionForm({ dispatch }: any) {
  const dayCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch({ type: 'DAY', payload: { day: e.target.value } });
    } else {
      dispatch({ type: 'DAY_UNCHECK', payload: { day: e.target.value } });
    }
  };

  return (
    <S.DaySelectionForm>
      <G.SubTitle>활동 가능한 요일을 선택해주세요.</G.SubTitle>

      <div>
        <input type="checkbox" name="day" id="mon" value="mon" onChange={dayCheckHandler} />
        <label htmlFor="mon">월</label>

        <input type="checkbox" name="day" id="tue" value="tue" onChange={dayCheckHandler} />
        <label htmlFor="tue">화</label>

        <input type="checkbox" name="day" id="wed" value="wed" onChange={dayCheckHandler} />
        <label htmlFor="wed">수</label>

        <input type="checkbox" name="day" id="thu" value="thu" onChange={dayCheckHandler} />
        <label htmlFor="thu">목</label>

        <input type="checkbox" name="day" id="fri" value="fri" onChange={dayCheckHandler} />
        <label htmlFor="fri">금</label>

        <input type="checkbox" name="day" id="sat" value="sat" onChange={dayCheckHandler} />
        <label htmlFor="sat">토</label>

        <input type="checkbox" name="day" id="sun" value="sun" onChange={dayCheckHandler} />
        <label htmlFor="sun">일</label>
      </div>
    </S.DaySelectionForm>
  );
}

export default DaySelectionForm;
