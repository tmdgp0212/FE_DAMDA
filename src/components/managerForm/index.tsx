import React from 'react';

import { BsChevronLeft } from 'react-icons/bs';
import * as S from './style';

function ManagerForm() {
  return (
    <S.ManagerFormContainer>
      <S.ManagerFormHeader>
        <p>
          <BsChevronLeft />
        </p>
        <h1>열다 옷장정리 매니저 신청</h1>
      </S.ManagerFormHeader>
    </S.ManagerFormContainer>
  );
}

export default ManagerForm;
