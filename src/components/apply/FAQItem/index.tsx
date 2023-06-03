import React, { useState } from 'react';
import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';

import { faqType } from '@/types/constants/managerApplyPageTypes';
import { replaceStringsWithTags } from '@/utils';
import * as S from './style';

interface FAQItemProps {
  faq: faqType;
}

function FAQItem({ faq }: FAQItemProps) {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const { info, title, description } = faq;

  return (
    <S.FAQItem onClick={() => setIsFAQOpen(!isFAQOpen)} isFAQOpen={isFAQOpen}>
      <S.FAQCard>
        {isFAQOpen ? <FiArrowUpLeft /> : <FiArrowDownRight />}

        <S.CardHeader>
          <strong>{info}</strong>
          <h3>{title}</h3>
        </S.CardHeader>

        {isFAQOpen && (
          <S.CardContent>{<p dangerouslySetInnerHTML={replaceStringsWithTags(description)}></p>}</S.CardContent>
        )}
      </S.FAQCard>
    </S.FAQItem>
  );
}

export default FAQItem;
