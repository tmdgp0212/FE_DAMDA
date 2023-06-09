import React, { useState } from 'react';
import { UserSurveyFormAddressProps } from '@/types/components/form';
import { UserSurveyAddressSelectWrapper } from '@/styles/survey.styled';
import { AiOutlineDown } from 'react-icons/ai';

function AddressSelect({ title }: UserSurveyFormAddressProps) {
  const [address, setAddress] = useState<string>('');

  return (
    <UserSurveyAddressSelectWrapper>
      <span className="title">{title}</span>
      {address && <h1>{address}</h1>}
      <div className="address">
        <span>지역 선택</span>
        <AiOutlineDown />
      </div>
    </UserSurveyAddressSelectWrapper>
  );
}

export default AddressSelect;
