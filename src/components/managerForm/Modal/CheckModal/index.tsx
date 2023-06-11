import React from 'react';

import * as U from '../UnCompleteModal/style';
import * as S from './style';

function CheckModal({ state, setIsSubmitClicked }: any) {
  const {
    manager_name,
    manager_phone,
    activity_day,
    activity_region,
    manager_license,
    manager_license_etc,
    field_experience,
    main_job,
    main_job_etc,
    manager_drive,
  } = state;

  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
  const dayArr = activity_day.map((day: string) => {
    switch (day) {
      case 'mon':
        return '월';

      case 'tue':
        return '화';

      case 'wed':
        return '수';

      case 'thu':
        return '목';

      case 'fri':
        return '금';

      case 'sat':
        return '토';

      case 'sun':
        return '일';

      default:
        break;
    }
  });
  dayArr.sort((a: string, b: string) => {
    const dayIndexA = daysOfWeek.indexOf(a);
    const dayIndexB = daysOfWeek.indexOf(b);

    if (dayIndexA === -1 && dayIndexB === -1) {
      return 0;
    } else if (dayIndexA === -1) {
      return 1;
    } else if (dayIndexB === -1) {
      return -1;
    }

    return dayIndexA - dayIndexB;
  });

  const submitHandler = () => {};

  return (
    <S.CheckModal className="check-modal">
      <S.Header className="header">
        <h1>열다 옷장정리 매니저 신청</h1>

        <p>
          작성이 완료 되었습니다!
          <br />
          작성해주신 내용을 확인해주세요.😁
        </p>
      </S.Header>

      <div className="content">
        <S.InputContents className="">
          <S.Content>
            <h3>매니저 정보</h3>
            <dl>
              <div>
                <dt>이름</dt>
                <dd>{manager_name}</dd>
              </div>

              <div>
                <dt>연락처</dt>
                <dd>{manager_phone}</dd>
              </div>

              <div>
                <dt>활동 가능 요일</dt>
                <dd>
                  {dayArr.map((day: string, index: number) => {
                    if (index === dayArr.length - 1) return <span key={day}>{day}</span>;
                    else return <span key={day}>{day},</span>;
                  })}
                </dd>
              </div>

              <div>
                <dt>활동 가능 지역</dt>
                <dd>
                  {activity_region.seoul.map((district: string, index: number) => {
                    if (index === activity_region.seoul.length - 1 && activity_region.gyeonggi.length === 0) {
                      return <span key={district}>서울 {district}</span>;
                    } else {
                      return <span key={district}>서울 {district} / </span>;
                    }
                  })}

                  {activity_region.gyeonggi.map((district: string, index: number) => {
                    if (index === activity_region.gyeonggi.length - 1) {
                      return <span key={district}>경기 {district}</span>;
                    } else {
                      return <span key={district}>경기 {district} / </span>;
                    }
                  })}
                </dd>
              </div>
            </dl>
          </S.Content>

          <S.Content>
            <h3>경력 정보</h3>
            <dl>
              <div>
                <dt>자격증</dt>
                {manager_license !== '기타' && <dd>{manager_license}</dd>}
                {manager_license === '기타' && <dd>{manager_license_etc}</dd>}
              </div>

              <div>
                <dt>본업여부</dt>
                {!main_job_etc && main_job === 'no' && <dd>아님</dd>}
                {main_job_etc && <dd>{main_job_etc}</dd>}
              </div>

              <div>
                <dt>자차 운전여부</dt>
                <dd>{manager_drive ? '있음' : '없음'}</dd>
              </div>

              <div>
                <dt>현장경험</dt>
                <dd>{field_experience.slice(0, 150)}</dd>
              </div>
            </dl>
          </S.Content>
        </S.InputContents>

        <U.ButtonGrop className="button-group">
          <button type="button" onClick={() => setIsSubmitClicked(false)}>
            수정할래요.
          </button>
          <button type="button" onClick={submitHandler}>
            네, 맞아요!
          </button>
        </U.ButtonGrop>
      </div>
    </S.CheckModal>
  );
}

export default CheckModal;
