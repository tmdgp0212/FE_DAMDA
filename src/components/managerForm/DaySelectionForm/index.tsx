import React, { ChangeEvent } from 'react';

import * as G from '../style';
import * as S from './style';

function DaySelectionForm({ state, dispatch }: any) {
  const dayCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch({ type: 'DAY', payload: { day: e.target.id } });
    } else {
      dispatch({ type: 'DAY_UNCHECK', payload: { day: e.target.id } });
    }
  };

  return (
    <S.DaySelectionForm>
      <G.SubTitle>활동 가능한 요일을 선택해주세요.</G.SubTitle>

      <div>
        <input
          type="checkbox"
          name="day"
          id="mon"
          checked={state.activity_day.includes('mon')}
          onChange={dayCheckHandler}
        />
        <label htmlFor="mon">월</label>

        <input
          type="checkbox"
          name="day"
          id="tue"
          checked={state.activity_day.includes('tue')}
          onChange={dayCheckHandler}
        />
        <label htmlFor="tue">화</label>

        <input
          type="checkbox"
          name="day"
          id="wed"
          checked={state.activity_day.includes('wed')}
          onChange={dayCheckHandler}
        />
        <label htmlFor="wed">수</label>

        <input
          type="checkbox"
          name="day"
          id="thu"
          checked={state.activity_day.includes('thu')}
          onChange={dayCheckHandler}
        />
        <label htmlFor="thu">목</label>

        <input
          type="checkbox"
          name="day"
          id="fri"
          checked={state.activity_day.includes('fri')}
          onChange={dayCheckHandler}
        />
        <label htmlFor="fri">금</label>

        <input
          type="checkbox"
          name="day"
          id="sat"
          checked={state.activity_day.includes('sat')}
          onChange={dayCheckHandler}
        />
        <label htmlFor="sat">토</label>

        <input
          type="checkbox"
          name="day"
          id="sun"
          checked={state.activity_day.includes('sun')}
          onChange={dayCheckHandler}
        />
        <label htmlFor="sun">일</label>
      </div>
    </S.DaySelectionForm>
  );
}

export default DaySelectionForm;
