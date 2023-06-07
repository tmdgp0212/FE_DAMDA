import React from 'react';

import IntroductionForm from './introductionForm';

import { BsChevronLeft } from 'react-icons/bs';
import * as S from './style';

function ManagerForm() {
  return (
    <S.ManagerFormContainer>
      <S.ManagerFormHeader>
        <p>
          <BsChevronLeft />
        </p>
        <h1>열다 옷장정리 매니저 신청</h1>
      </S.ManagerFormHeader>

      <div>
        <S.Headline>
          환영합니다, 매니저님!
          <br />
          매니저님에 대해 소개해주세요!
        </S.Headline>

        <S.StyleWrapper>
          <IntroductionForm info="이름" placeholder="김열다" />
          <IntroductionForm info="연락처" placeholder="010-0000-0000" />
        </S.StyleWrapper>

        <S.DaySelectionForm>
          <S.SubTitle>활동 가능한 요일을 선택해주세요.</S.SubTitle>

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
        </S.DaySelectionForm>
      </div>
    </S.ManagerFormContainer>
  );
}

export default ManagerForm;
