import React from 'react';
import FAQItem from '../FAQItem';

function FAQList({ faqList }) {
  return (
    <ul>
      {faqList.map((faq) => (
        <FAQItem key={faq.title} faq={faq} />
      ))}
    </ul>
  );
}

export default FAQList;
