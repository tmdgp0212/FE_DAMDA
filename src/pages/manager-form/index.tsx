import React, { useReducer, useState } from 'react';
import { managerFormReducer } from '@/reducers/managerFormReducer';

import ManagerForm from '@/components/managerForm';
import CheckModal from '@/components/managerForm/Modal/CheckModal';

function ManagerFormPage() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const [state, dispatch] = useReducer(managerFormReducer, {
    manager_name: '',
    manager_phone: '',
    activity_day: [],
    activity_region: { seoul: [], gyeonggi: [] },
    manager_license: '',
    manager_license_etc: null,
    field_experience: '',
    main_job: null,
    main_job_etc: null,
    manager_drive: null,
  });

  return (
    <>
      {isSubmitClicked ? (
        <CheckModal state={state} setIsSubmitClicked={setIsSubmitClicked} />
      ) : (
        <ManagerForm state={state} dispatch={dispatch} setIsSubmitClicked={setIsSubmitClicked} />
      )}
    </>
  );
}

export default ManagerFormPage;
