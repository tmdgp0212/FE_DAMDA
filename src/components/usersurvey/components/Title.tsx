import React from 'react';
import { UserSurveyTitleProps } from '@/types/components/form';
import { UserSurveyFormTitle } from '@/styles/survey.styled';
import { replaceStringsWithTags } from '@/utils';

function Title({ title }: UserSurveyTitleProps) {
  return <UserSurveyFormTitle dangerouslySetInnerHTML={replaceStringsWithTags(title)} />;
}

export default Title;
