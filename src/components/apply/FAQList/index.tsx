import React from 'react';

import FAQItem from '../FAQItem';
import { faqType } from '@/types/constants/managerApplyPageTypes';
import * as S from './style';

interface FAQListProps {
  managerApplyFAQs: faqType[];
}

function FAQList({ managerApplyFAQs }: FAQListProps) {
  return (
    <S.FAQList>
      {managerApplyFAQs.map((faq) => (
        <FAQItem key={faq.title} faq={faq} />
      ))}
    </S.FAQList>
  );
}

export default FAQList;
