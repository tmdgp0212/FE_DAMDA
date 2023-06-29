import React from 'react';
import FAQItem from '../FAQItem';
import { faqType } from '@/types/constants/faqType';

import * as S from './style';

interface FAQListProps {
  type: string;
  faqList: faqType[];
}

function FAQList({ type, faqList }: FAQListProps) {
  return (
    <S.FAQList>
      {faqList?.map((faq, index) => (
        <FAQItem key={faq.title} type={type} faq={faq} index={index} />
      ))}
    </S.FAQList>
  );
}

export default FAQList;
