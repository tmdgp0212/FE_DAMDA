import React, { useEffect, useState } from 'react';

import ManagerForm from '@/components/managerForm';
import CheckModal from '@/components/managerForm/Modal/CheckModal';
import { useRouter } from 'next/router';

function ManagerFormPage() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const tokenString = localStorage.getItem('login-state');
    const token = tokenString ? JSON.parse(tokenString) : null;
    if (!token.state.isLogin) router.push('/login');
  }, [router]);

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
