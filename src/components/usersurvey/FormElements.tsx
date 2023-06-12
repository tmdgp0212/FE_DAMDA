import React from 'react';
import Title from '@/components/usersurvey/components/Title';
import Input from '@/components/usersurvey/components/Input';
import AddressSelect from '@/components/usersurvey/components/AddressSelect';
import Select from '@/components/usersurvey/components/Select';
import Radio from '@/components/usersurvey/components/Radio';
import { UserSurveyFormDataType } from '@/types/constants/userSurvey';
import { FormElementsProps } from '@/types/components/form';

function FormElements({ data, handleUpdateFormValue }: FormElementsProps) {
  switch (data.questionType) {
    case 'TITLE':
      return <Title title={data.questionTitle} />;
    case 'STRING':
      return (
        <Input
          title={data.questionTitle}
          placeholder={data.questionIdentify}
          questionNumber={data.questionNumber}
          handleUpdateFormValue={handleUpdateFormValue}
        />
      );
    case 'SELECT':
      return data.questionIdentify === 'ADDRESS' ? (
        <AddressSelect title={data.questionTitle} />
      ) : (
        <Select
          category={data.categoryList!}
          placeholder={data.questionIdentify}
          title={data.questionTitle}
          questionNumber={data.questionNumber}
          handleUpdateFormValue={handleUpdateFormValue}
        />
      );
    case 'RADIO':
      return (
        <Radio
          title={data.questionTitle}
          category={data.categoryList!}
          placeholder={data.questionIdentify}
          questionNumber={data.questionNumber}
          handleUpdateFormValue={handleUpdateFormValue}
        />
      );
    default:
      return <div></div>;
  }
}

export default FormElements;
