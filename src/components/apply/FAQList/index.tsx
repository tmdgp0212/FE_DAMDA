import React from 'react';
import FAQItem from '../FAQItem';
import * as S from './style';

function FAQList({ managerApplyFAQs }) {
  return (
    <S.FAQList>
      {managerApplyFAQs.map((faq) => (
        <FAQItem key={faq.title} faq={faq} />
      ))}
    </S.FAQList>
  );
}

export default FAQList;
