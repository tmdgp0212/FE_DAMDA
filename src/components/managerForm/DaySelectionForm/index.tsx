import React, { ChangeEvent } from 'react';

import * as G from '../style';
import * as S from './style';

function DaySelectionForm({ state, dispatch }: any) {
  const dayCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch({ type: 'DAY', payload: { day: e.target.id, isCheck: true } });
    } else {
      dispatch({ type: 'DAY', payload: { day: e.target.id, isCheck: false } });
    }
  };

  return (
    <S.DaySelectionForm>
      <G.SubTitle>활동 가능한 요일을 선택해주세요.</G.SubTitle>

      <div>
        <input type="checkbox" name="day" id={'0'} checked={state.activity_day[0]} onChange={dayCheckHandler} />
        <label htmlFor={'0'}>월</label>

        <input type="checkbox" name="day" id={'1'} checked={state.activity_day[1]} onChange={dayCheckHandler} />
        <label htmlFor={'1'}>화</label>

        <input type="checkbox" name="day" id={'2'} checked={state.activity_day[2]} onChange={dayCheckHandler} />
        <label htmlFor={'2'}>수</label>

        <input type="checkbox" name="day" id={'3'} checked={state.activity_day[3]} onChange={dayCheckHandler} />
        <label htmlFor={'3'}>목</label>

        <input type="checkbox" name="day" id={'4'} checked={state.activity_day[4]} onChange={dayCheckHandler} />
        <label htmlFor={'4'}>금</label>

        <input type="checkbox" name="day" id={'5'} checked={state.activity_day[5]} onChange={dayCheckHandler} />
        <label htmlFor={'5'}>토</label>

        <input type="checkbox" name="day" id={'6'} checked={state.activity_day[6]} onChange={dayCheckHandler} />
        <label htmlFor={'6'}>일</label>
      </div>
    </S.DaySelectionForm>
  );
}

export default DaySelectionForm;
