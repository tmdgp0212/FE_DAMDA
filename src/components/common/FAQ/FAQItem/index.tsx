import React, { useRef, useState } from 'react';
import { replaceStringsWithTags } from '@/utils';

import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';
import * as S from './style';
import { faqType } from '@/types/constants/faqType';

interface FAQItemProps {
  faq: faqType;
}

function FAQItem({ faq }: FAQItemProps) {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const descRef = useRef<HTMLDivElement | null>(null);
  const { title, description, info, category } = faq;

  const cardContentStyle = {
    height: isFAQOpen && descRef.current ? `${descRef.current.getBoundingClientRect().height + 16}px` : '0px',
  };

  return (
    <S.FAQItem onClick={() => setIsFAQOpen(!isFAQOpen)} isFAQOpen={isFAQOpen}>
      <S.FAQCard>
        {isFAQOpen ? <FiArrowUpLeft /> : <FiArrowDownRight />}

        <S.CardHeader>
          <strong>{info || category}</strong>
          <h3>{title}</h3>
        </S.CardHeader>

        <S.CardContent isFAQOpen={isFAQOpen} style={cardContentStyle}>
          <hr />
          {<p dangerouslySetInnerHTML={replaceStringsWithTags(description)} ref={descRef}></p>}
        </S.CardContent>
      </S.FAQCard>
    </S.FAQItem>
  );
}

export default FAQItem;
