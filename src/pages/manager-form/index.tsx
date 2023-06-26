import React, { useState } from 'react';

import ManagerForm from '@/components/managerForm';
import CheckModal from '@/components/managerForm/Modal/CheckModal';

function ManagerFormPage() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

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
