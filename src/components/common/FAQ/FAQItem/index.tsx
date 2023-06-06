import React, { useEffect, useRef, useState } from 'react';
import { replaceStringsWithTags } from '@/utils';

import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';
import { faqType } from '@/types/constants/faqType';

import * as S from './style';

interface FAQItemProps {
  faq: faqType;
  index: number;
}

function FAQItem({ faq, index }: FAQItemProps) {
  const [isFAQOpen, setIsFAQOpen] = useState(index === 0 ? true : false);
  const [height, setHeight] = useState<string>('');
  const descRef = useRef<HTMLDivElement | null>(null);
  const { title, description, info, category } = faq;

  useEffect(() => {
    if (descRef.current !== null) {
      setHeight(isFAQOpen ? `${descRef.current.getBoundingClientRect().height + 16}px` : '0px');
    }
  }, [descRef, isFAQOpen]);

  return (
    <S.FAQItem onClick={() => setIsFAQOpen(!isFAQOpen)} isFAQOpen={isFAQOpen}>
      <S.FAQCard>
        {isFAQOpen ? <FiArrowUpLeft /> : <FiArrowDownRight />}

        <S.CardHeader>
          <strong>{info || category}</strong>
          <h3>{title}</h3>
        </S.CardHeader>

        <S.CardContent isFAQOpen={isFAQOpen} style={{ height }}>
          <hr />
          {<p dangerouslySetInnerHTML={replaceStringsWithTags(description)} ref={descRef}></p>}
        </S.CardContent>
      </S.FAQCard>
    </S.FAQItem>
  );
}

export default FAQItem;
