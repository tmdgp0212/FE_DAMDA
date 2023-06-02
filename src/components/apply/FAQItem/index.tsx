import React, { useState } from 'react';
import { replaceStringsWithTags } from '@/utils';

import * as S from './style';
import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';

function FAQItem({ faq }) {
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
