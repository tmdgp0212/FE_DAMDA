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
      {faqList?.map((faq, index) => (
        <FAQItem key={faq.title} faq={faq} index={index} />
      ))}
    </S.FAQList>
  );
}

export default FAQList;
