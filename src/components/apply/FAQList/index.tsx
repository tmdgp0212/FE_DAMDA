import React from 'react';

import FAQItem from '../FAQItem';
import { faqType } from '@/types/constants/managerApplyPageTypes';

interface FAQListProps {
  managerApplyFAQs: faqType[];
}

function FAQList({ managerApplyFAQs }: FAQListProps) {
  return (
    <ul>
      {managerApplyFAQs.map((faq) => (
        <FAQItem key={faq.title} faq={faq} />
      ))}
    </ul>
  );
}

export default FAQList;
