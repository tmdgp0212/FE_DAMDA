import React, { useEffect } from 'react';
import UserSurvey from '@/components/usersurvey';
import useAuthStore from '@/store/auth';
import { useRouter } from 'next/router';
import { UserLoginNeed } from '@/styles/survey.styled';

function Index() {
  const router = useRouter();

  const { user } = useAuthStore();

  return (
    <>
      {user.isLogin && <UserSurvey />}
      {!user.isLogin && (
        <UserLoginNeed>
          <h1>설문을 진행할려면 로그인이 필요합니다.</h1>
          <button onClick={() => router.push('/login')}>이 버튼을 눌러서 로그인 화면으로 이동해주세요!</button>
        </UserLoginNeed>
      )}
    </>
  );
}

export default Index;
