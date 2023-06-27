import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserSurveyCompleteModal, UserSurveyCompleteModalOverlay } from '@/styles/survey.styled';
import Error from '@/components/usersurvey/components/svg/error';
import { motion } from 'framer-motion';

function FailModal({ errorMsg }: { errorMsg: string }) {
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
          <motion.div
            className="svg"
            animate={{
              scale: [0.5, 1.1, 1.3, 0.8, 1],
            }}
          >
            <Error />
          </motion.div>
          <div className="content">
            <h1>에러가 발생하였습니다!</h1>

            <span>
              불편을 끼쳐드려서 정말 죄송합니다 <br />
              이유는 아래와 같습니다 <br />
              {errorMsg} <br />
              상담을 받고 싶으시다면 하단에 있는 <br />
              카카오톡 버튼을 눌러주세요!
            </span>

            <p>{count} 초 뒤 자동으로 창이 닫히고 메인 페이지로 이동합니다.</p>
          </div>
        </div>
      </UserSurveyCompleteModal>
    </UserSurveyCompleteModalOverlay>
  );
}

export default FailModal;
