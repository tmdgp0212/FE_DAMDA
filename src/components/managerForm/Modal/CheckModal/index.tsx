import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useManagerFormStore from '@/store/managerForm';
import { postManagerForm } from '@/apis/manager';

import SupportModal from '../SupportModal';

import * as U from '../UnCompleteModal/style';
import * as S from './style';

interface CheckModalProps {
  setIsSubmitClicked: (isClicked: boolean) => void;
}

function CheckModal({ setIsSubmitClicked }: CheckModalProps) {
  const { mutate, isLoading } = useMutation(postManagerForm, {
    onSuccess(data) {
      setVisible(data);
    },
  });

  // state
  const {
    name,
    phone,
    activityDay,
    region,
    certificateStatus,
    certificateStatusEtc,
    fieldExperience,
    mainJobStatus,
    mainJobStatusEtc,
    vehicle,
  } = useManagerFormStore((state) => state);

  const [visible, setVisible] = useState(false);

  // 자격증
  let certificate;
  switch (certificateStatus) {
    case 'FIRST_RATE_OFF':
      certificate = '1급 (오프라인 취득)';
      break;

    case 'SECOND_RATE_OFF':
      certificate = '2급 (오프라인 취득)';
      break;

    case 'FIRST_RATE_ON':
      certificate = '1급 (온라인 취득)';
      break;

    case 'SECOND_RATE_ON':
      certificate = '2급 (온라인 취득)';
      break;

    case 'NONE':
      certificate = '없음';
      break;

    case 'ETC':
      certificate = '기타';
      break;

    default:
      break;
  }

  // 활동 가능 요일
  const resultDays = activityDay
    .map((value: boolean, index: number) => {
      if (index === 0 && value) return '월';
      else if (index === 1 && value) return '화';
      else if (index === 2 && value) return '수';
      else if (index === 3 && value) return '목';
      else if (index === 4 && value) return '금';
      else if (index === 5 && value) return '토';
      else if (index === 6 && value) return '일';
    })
    .filter((day: string | undefined) => day !== undefined);

  // 활동 가능 지역
  const seoul = [...region.서울특별시];
  const gyeonggi = [...region.경기도];
  const renderedRegions = seoul
    .map((district) => `서울 ${district}`)
    .concat(gyeonggi.map((district) => `경기 ${district}`))
    .join(' / ');

  const submitHandler = () => {
    const phoneNumberWithoutDash = phone.replace(/-/g, '');

    mutate({
      name,
      phone: phoneNumberWithoutDash,
      activityDay,
      region,
      certificateStatus,
      certificateStatusEtc: certificateStatusEtc || '입력없음',
      fieldExperience: fieldExperience === '' ? '입력없음' : fieldExperience,
      mainJobStatus,
      mainJobStatusEtc: !mainJobStatus ? '입력없음' : mainJobStatusEtc,
      vehicle,
    });
  };

  return (
    <>
      <S.CheckModal>
        <S.Header>
          <h1>열다 옷장정리 매니저 신청</h1>

          <p>
            작성이 완료 되었습니다!
            <br />
            작성해주신 내용을 확인해주세요.😁
          </p>
        </S.Header>

        <div>
          <S.InputContents>
            <S.Content>
              <h3>매니저 정보</h3>
              <dl>
                <div>
                  <dt>이름</dt>
                  <dd>{name}</dd>
                </div>

                <div>
                  <dt>연락처</dt>
                  <dd>{phone}</dd>
                </div>

                <div>
                  <dt>활동 가능 요일</dt>
                  <dd>
                    {resultDays.map((day: string | undefined, index: number) => {
                      if (index === resultDays.length - 1) return <span key={day}>{day}</span>;
                      else if (day) return <span key={day}>{day}, </span>;
                    })}
                  </dd>
                </div>

                <div>
                  <dt>활동 가능 지역</dt>
                  <dd>{renderedRegions}</dd>
                </div>
              </dl>
            </S.Content>

            <S.Content>
              <h3>경력 정보</h3>
              <dl>
                <div>
                  <dt>자격증</dt>
                  {certificateStatus !== 'ETC' && <dd>{certificate}</dd>}
                  {certificateStatus === 'ETC' && <dd>{certificateStatusEtc}</dd>}
                </div>

                <div>
                  <dt>본업여부</dt>
                  {!mainJobStatusEtc && !mainJobStatus && <dd>아님</dd>}
                  {mainJobStatusEtc && <dd>{mainJobStatusEtc}</dd>}
                </div>

                <div>
                  <dt>자차 운전여부</dt>
                  <dd>{vehicle ? '있음' : '없음'}</dd>
                </div>

                <div>
                  <dt>현장경험</dt>
                  <dd>{fieldExperience.slice(0, 150)}</dd>
                </div>
              </dl>
            </S.Content>
          </S.InputContents>

          <U.ButtonGrop isLoading={isLoading}>
            <button type="button" onClick={() => setIsSubmitClicked(false)}>
              수정할래요.
            </button>
            {!isLoading && (
              <button type="button" onClick={submitHandler}>
                네, 맞아요!
              </button>
            )}
            {isLoading && (
              <button type="button" onClick={submitHandler}>
                신청중...
              </button>
            )}
          </U.ButtonGrop>
        </div>
      </S.CheckModal>

      {visible && <SupportModal />}
    </>
  );
}

export default CheckModal;
