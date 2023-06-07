import React from 'react';

import IntroductionForm from './introductionForm';

import { BsChevronLeft, BsChevronDown } from 'react-icons/bs';
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

      <S.StyleWrapper large>
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
      </S.StyleWrapper>

      <div>
        <S.Headline>
          매니저님의 경력정보를
          <br />
          알려주세요.
        </S.Headline>

        <S.CertificateForm>
          <S.SubTitle>
            보유하고 계신 <br />
            정리수납전문가 자격증을 선택해주세요.
          </S.SubTitle>

          <span>(1개만 선택가능)</span>

          <S.CertificateButton type="button">
            자격증 선택하기
            <BsChevronDown />
          </S.CertificateButton>
          <ul>
            <li>
              <S.OptionButton type="button">1급 (오프라인 취득)</S.OptionButton>
            </li>

            <li>
              <S.OptionButton type="button">2급 (오프라인 취득)</S.OptionButton>
            </li>

            <li>
              <S.OptionButton type="button">1급 (온라인 취득)</S.OptionButton>
            </li>

            <li>
              <S.OptionButton type="button">2급 (온라인 취득)</S.OptionButton>
            </li>

            <li>
              <S.OptionButton type="button">없음</S.OptionButton>
            </li>

            <li>
              <S.OptionButton type="button">기타</S.OptionButton>
            </li>
          </ul>
        </S.CertificateForm>

        <S.FieldExperienceForm>
          <S.SubTitle>
            정리수납 관련 현장 경험이 있으시다면
            <br />
            상세하게 입력해주세요.
          </S.SubTitle>

          <p>현장에서 옷장정리를 한 경험을 위주로 입력해주세요.</p>

          <textarea
            name=""
            id=""
            placeholder="현장 파견 20회 이상, 옷장 정리 경험 10회 이상"
            style={{ resize: 'none' }}
          ></textarea>

          <span>0 / 150</span>
        </S.FieldExperienceForm>
      </div>
    </S.ManagerFormContainer>
  );
}

export default ManagerForm;
