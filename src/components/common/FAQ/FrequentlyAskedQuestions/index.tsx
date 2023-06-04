import React from 'react';
import FAQList from '../FAQList';
import { faqType } from '@/types/constants/faqType';

interface FrequentlyAskedQuestionsProps {
  enteredFAQs: faqType[];
}

function FrequentlyAskedQuestions({ enteredFAQs }: FrequentlyAskedQuestionsProps) {
  return <FAQList faqList={enteredFAQs} />;
}

export default FrequentlyAskedQuestions;
