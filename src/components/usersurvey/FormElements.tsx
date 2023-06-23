import React from 'react';
import Title from '@/components/usersurvey/components/Title';
import Input from '@/components/usersurvey/components/Input';
import AddressSelect from '@/components/usersurvey/components/AddressSelect';
import Select from '@/components/usersurvey/components/Select';
import Radio from '@/components/usersurvey/components/Radio';
import { FormElementsProps } from '@/types/components/form';
import DateSelect from '@/components/usersurvey/components/DateSelect';
import AdditionalInput from '@/components/usersurvey/components/AdditionalInput';

function FormElements({ data, handleUpdateFormValue }: FormElementsProps) {
  const { questionIdentify } = data;
  const isOptional =
    questionIdentify === 'PARKINGAVAILABLE' ||
    questionIdentify === 'RESERVATIONENTER' ||
    questionIdentify === 'RESERVATIONNOTE' ||
    questionIdentify === 'RESERVATIONREQUEST';

  if (questionIdentify === 'ADDRESS')
    return <AddressSelect handleUpdateFormValue={handleUpdateFormValue} formData={data} />;

  switch (data.questionType) {
    case 'TITLE':
      return <Title title={data.questionTitle} />;
    case 'STRING':
      return isOptional ? (
        <AdditionalInput formData={data} handleUpdateFormValue={handleUpdateFormValue} />
      ) : (
        <Input formData={data} handleUpdateFormValue={handleUpdateFormValue} />
      );
    case 'SELECT':
      return <Select formData={data} handleUpdateFormValue={handleUpdateFormValue} />;
    case 'RADIO':
      return <Radio formData={data} handleUpdateFormValue={handleUpdateFormValue} />;
    case 'DATE':
      return <DateSelect formData={data} handleUpdateFormValue={handleUpdateFormValue} />;
    default:
      return <>에러가 발생했습니다!! 관리자 에게 알려주세요!</>;
  }
}

export default FormElements;
