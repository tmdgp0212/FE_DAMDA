import React, { useState } from 'react';
import { replaceStringsWithTags } from '@/utils';

import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';
import * as S from './style';
import { faqType } from '@/types/constants/faqType';

interface FAQItemProps {
  faq: faqType;
}

function FAQItem({ faq }: FAQItemProps) {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const { title, description, info, category } = faq;

  return (
    <S.FAQItem onClick={() => setIsFAQOpen(!isFAQOpen)} isFAQOpen={isFAQOpen}>
      <S.FAQCard>
        {isFAQOpen ? <FiArrowUpLeft /> : <FiArrowDownRight />}

        <S.CardHeader>
          <strong>{info || category}</strong>
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
