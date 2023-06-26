import React, { ChangeEvent } from 'react';
import useManagerFormStore from '@/store/managerForm';

import * as G from '../style';
import * as S from './style';

function DaySelectionForm() {
  const { activityDay, setDay } = useManagerFormStore((state) => state);

  const dayCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDay(Number(e.target.id), true);
    else setDay(Number(e.target.id), false);
  };

  return (
    <S.DaySelectionForm>
      <G.SubTitle>활동 가능한 요일을 선택해주세요.</G.SubTitle>

      <div>
        <input type="checkbox" name="day" id={'0'} checked={activityDay[0]} onChange={dayCheckHandler} />
        <label htmlFor={'0'}>월</label>

        <input type="checkbox" name="day" id={'1'} checked={activityDay[1]} onChange={dayCheckHandler} />
        <label htmlFor={'1'}>화</label>

        <input type="checkbox" name="day" id={'2'} checked={activityDay[2]} onChange={dayCheckHandler} />
        <label htmlFor={'2'}>수</label>

        <input type="checkbox" name="day" id={'3'} checked={activityDay[3]} onChange={dayCheckHandler} />
        <label htmlFor={'3'}>목</label>

        <input type="checkbox" name="day" id={'4'} checked={activityDay[4]} onChange={dayCheckHandler} />
        <label htmlFor={'4'}>금</label>

        <input type="checkbox" name="day" id={'5'} checked={activityDay[5]} onChange={dayCheckHandler} />
        <label htmlFor={'5'}>토</label>

        <input type="checkbox" name="day" id={'6'} checked={activityDay[6]} onChange={dayCheckHandler} />
        <label htmlFor={'6'}>일</label>
      </div>
    </S.DaySelectionForm>
  );
}

export default DaySelectionForm;
