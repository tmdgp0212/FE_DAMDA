import React from 'react';

import IntroductionForm from './introductionForm';
import RadioButtonForm from './RadioButtonForm';

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

        <RadioButtonForm />
      </div>

      <S.ServiceGuide>
        <S.Headline>
          열다의 옷장 정리 가이드에 따라
          <br />
          서비스 제공이 가능한가요?
        </S.Headline>

        <div>
          <S.GuideDetail>
            <p className="description">
              열다의 매니저분들은 열다가 자체 개발한
              <br /> 옷장 정리 가이드에 따라 서비스를 제공하며,
              <br /> 아래 두 가지가 가능해야 합니다.
            </p>

            <p>
              <strong>1. 서비스 1건당 평균 작업 소요시간은 4시간입니다.</strong>

              <strong>2. 매니저님 혼자 서비스를 제공하실 수도 있습니다.</strong>
            </p>
          </S.GuideDetail>

          <S.InputCheckbox>
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement">네, 가능합니다!</label>
          </S.InputCheckbox>
        </div>
      </S.ServiceGuide>

      <S.ManagerSupportButton type="button">지원하기</S.ManagerSupportButton>
    </S.ManagerFormContainer>
  );
}

export default ManagerForm;
