import React from 'react';
import Title from '@/components/usersurvey/components/Title';
import Input from '@/components/usersurvey/components/Input';
import AddressSelect from '@/components/usersurvey/components/AddressSelect';
import Select from '@/components/usersurvey/components/Select';
import Radio from '@/components/usersurvey/components/Radio';
import { FormElementsProps } from '@/types/components/form';
import DateSelect from '@/components/usersurvey/components/DateSelect';

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
        <AddressSelect
          title={data.questionTitle}
          handleUpdateFormValue={handleUpdateFormValue}
          questionNumber={data.questionNumber}
          placeholder={data.questionIdentify}
        />
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
    case 'DATE':
      return <DateSelect title={data.questionTitle} placeholder={data.questionIdentify} />;
    default:
      return <div></div>;
  }
}

export default FormElements;
