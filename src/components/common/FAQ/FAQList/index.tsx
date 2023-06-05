import React from 'react';
import FAQItem from '../FAQItem';
import { faqType } from '@/types/constants/faqType';

import * as S from './style';

interface FAQListProps {
  faqList: faqType[];
}

function FAQList({ faqList }: FAQListProps) {
  return (
    <S.FAQList>
      {faqList.map((faq) => (
        <FAQItem key={faq.title} faq={faq} />
      ))}
    </S.FAQList>
  );
}

export default FAQList;
