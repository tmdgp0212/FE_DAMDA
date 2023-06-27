import React, { useEffect } from 'react';
import UserSurvey from '@/components/usersurvey';
import useAuthStore from '@/store/auth';
import { useRouter } from 'next/router';

function Index() {
  const router = useRouter();

  const { user } = useAuthStore();

  useEffect(() => {
    if (user === null) return;
    if (user.isLogin === false) {
      router.push('/login');
    }
  }, [user]);

  return <UserSurvey />;
}

export default Index;
