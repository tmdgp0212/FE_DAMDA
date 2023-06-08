import React from 'react';

import * as G from '../style';
import * as S from './style';

function DaySelectionForm({ register }: { register: any }) {
  return (
    <S.DaySelectionForm>
      <G.SubTitle>활동 가능한 요일을 선택해주세요.</G.SubTitle>

      <div>
        <input type="checkbox" name="day" id="mon" value="mon" {...register('checkbox_field')} />
        <label htmlFor="mon">월</label>

        <input type="checkbox" name="day" id="tue" value="tue" {...register('checkbox_field')} />
        <label htmlFor="tue">화</label>

        <input type="checkbox" name="day" id="wed" value="wed" {...register('checkbox_field')} />
        <label htmlFor="wed">수</label>

        <input type="checkbox" name="day" id="thu" value="thu" {...register('checkbox_field')} />
        <label htmlFor="thu">목</label>

        <input type="checkbox" name="day" id="fri" value="fri" {...register('checkbox_field')} />
        <label htmlFor="fri">금</label>

        <input type="checkbox" name="day" id="sat" value="sat" {...register('checkbox_field')} />
        <label htmlFor="sat">토</label>

        <input type="checkbox" name="day" id="sun" value="sun" {...register('checkbox_field')} />
        <label htmlFor="sun">일</label>
      </div>
    </S.DaySelectionForm>
  );
}

export default DaySelectionForm;
