import { mainContentsDataType } from '@/types/constants/mainPageTypes';
import FirstButtonGroup from '@/components/main/ButtonGroup/FirstButtonGroup';
import SecButtonGroup from '@/components/main/ButtonGroup/SecButtonGroup';
import ThirdButtonGroup from '@/components/main/ButtonGroup/ThirdButtonGroup';
import MainResellerGraph from '@/components/main/MainResellerGraph';
import UserReview from '@/components/main/UserReview';

export const mainContentSection: mainContentsDataType[] = [
  {
    contents: <FirstButtonGroup />,
    type: 'button',
  },
  {
    emoji: '🤔',
    p: '우리집은 비용이 얼마나 들까요?',
    h1: '열다 서비스 br 가구 당 평균 가격',
    contents: <SecButtonGroup />,
    type: 'button',
  },
  {
    emoji: '⏳',
    p: '합리적이고 투명한',
    h1: '시간당 가격 정찰제를 br 도입했어요',
    contents: <ThirdButtonGroup />,
    type: 'button',
  },
  {
    emoji: '💸',
    p: '서비스를 이용하신 후에 정리된 안 입는 옷은 br 열다에서 전문 셀러를 통해 수익화하세요',
    h1: '안 입는 옷도 br 새로운 방향으로',
    reverse: true,
    contents: <MainResellerGraph />,
    type: 'graph',
  },
  {
    emoji: '‍🙆‍♀️',
    p: '',
    h1: '먼저 열다를 만나신 분들의 br 이야기도 들어보세요',
    contents: <UserReview />,
    type: 'text',
  },
  {
    emoji: '🚚',
    p: '서울과 경기 일부 지역에서만 br 서비스 하고 있습니다. br 다른 지역으로도 확대할 예정이니 br 조금만 기다려주세요!',
    h1: '지금 열다는',
    type: 'image',
    reverse: true,
  },
];
