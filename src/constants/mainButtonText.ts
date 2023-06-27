import { buttonElementGroupType, buttonRequestGroupType, buttonTitlePriceType } from '@/types/constants/mainPageTypes';

export const buttonElementGroup: buttonElementGroupType = [
  '설문을 작성하고 간편하게 신청하세요!',
  '정리수납 전문가들을 연결해드립니다!',
  '정리 서비스와 함께 정리 팁도 알려드려요!',
  '결제는 서비스를 받으신 후에!',
];
export const buttonRequestGroup: buttonRequestGroupType[] = [
  {
    title: '간편 견적',
    to: '/usersurvey',
  },
  {
    title: '상담 신청',
    to: 'https://www.yolda.me/login/chat',
  },
];

export const buttonPersonGroup: buttonTitlePriceType[] = [
  {
    title: '1인 가구',
    price: '60,000',
  },
  {
    title: '2인 가구',
    price: '12,000',
  },
  {
    title: '3인 가구',
    price: '150,000',
  },
];

export const buttonPriceGroup: buttonTitlePriceType[] = [
  {
    title: '업계 최저 시작가',
    price: '200,000',
  },
  {
    title: '열다 최저가',
    price: '75,000',
  },
  {
    title: '회원 할인가',
    price: '59,900',
  },
  {
    title: '무료 견적 받기',
  },
];
