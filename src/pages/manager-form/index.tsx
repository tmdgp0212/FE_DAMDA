import React, { useEffect, useState } from 'react';

import ManagerForm from '@/components/managerForm';
import CheckModal from '@/components/managerForm/Modal/CheckModal';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/auth';

function ManagerFormPage() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user.isLogin === false) router.push('/login');
  }, [router, user.isLogin]);

  return (
    <>
      {isSubmitClicked ? (
        <CheckModal setIsSubmitClicked={setIsSubmitClicked} />
      ) : (
        <ManagerForm setIsSubmitClicked={setIsSubmitClicked} />
      )}
    </>
  );
}

export default ManagerFormPage;
