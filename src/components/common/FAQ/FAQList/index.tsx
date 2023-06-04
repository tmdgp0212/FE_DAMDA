import React from 'react';
import FAQItem from '../FAQItem';
import { faqType } from '@/types/constants/faqType';

interface FAQListProps {
  faqList: faqType[];
}

function FAQList({ faqList }: FAQListProps) {
  return (
    <ul>
      {faqList.map((faq) => (
        <FAQItem key={faq.title} faq={faq} />
      ))}
    </ul>
  );
}

export default FAQList;
