import React from 'react';
import FAQList from '../FAQList';
import { faqType } from '@/types/constants/faqType';

interface FrequentlyAskedQuestionsProps {
  type: string;
  enteredFAQs: faqType[];
}

function FrequentlyAskedQuestions({ type, enteredFAQs }: FrequentlyAskedQuestionsProps) {
  return <FAQList type={type} faqList={enteredFAQs} />;
}

export default FrequentlyAskedQuestions;
