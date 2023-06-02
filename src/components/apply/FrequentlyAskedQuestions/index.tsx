import React from 'react';
import FAQList from '../FAQList';
import { managerApplyFAQs } from '@/constants/managerApplyFAQs';

function FrequentlyAskedQuestions() {
  return <FAQList managerApplyFAQs={managerApplyFAQs} />;
}

export default FrequentlyAskedQuestions;
