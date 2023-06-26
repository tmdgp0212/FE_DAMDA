import React, { useEffect, useState } from 'react';
import { UserSurveyCompleteModal, UserSurveyCompleteModalOverlay } from '@/styles/survey.styled';
import Check from '@/components/usersurvey/components/svg/Check';
import { useRouter } from 'next/router';

function CompleteModal() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    if (count === 0) router.push('/').then(() => window.scrollTo(0, 0));

    return () => clearInterval(timer);
  }, [count]);

  return (
    <UserSurveyCompleteModalOverlay>
      <UserSurveyCompleteModal>
        <div className="body">
          <Check />
          <div className="content">
            <h1>예약이 완료되었습니다!</h1>

            <span>
              열다의 옷장정리 서비스를 <br />
              예약해주셔서 감사합니다. 🥰 <br />
              확인 후 카카오톡으로 상담원을 통해 <br />
              안내드리도록 하겠습니다 <br />
            </span>

            <p>{count} 초 뒤 자동으로 창이 닫힙니다.</p>
          </div>
        </div>
      </UserSurveyCompleteModal>
    </UserSurveyCompleteModalOverlay>
  );
}

export default CompleteModal;
