import { requirementType } from '@/types/constants/userSurvey';

export const requirement: requirementType[] = [
  {
    id: 1,
    title:
      '예상 시간보다 작업양이 많아질 경우, strongOpen 시간을 연장하거나 방문 2회로 나눠서 strongClose 서비스가 제공될 수 있습니다.',
    additional: '**시간 연장 시 추가 비용은 시간 당 20,000원이 발생합니다. (매니저 1인 기준) ',
  },
  {
    id: 2,
    title:
      '서비스 시간 동안 고객님이 strongOpen 정해주신 우선 순위strongClose에 따라 정리가 진행되며, 작업 시간이 충분하지 않을 경우 우선 순위가 낮은 의류들은 정리가 마무리 되지 않은 채로 종료될 수 있습니다.',
  },
  {
    id: 3,
    title: '정리에 필요한 물품을 미리 준비 부탁드립니다 :)',
    list: ['옷걸이 또는 수납바구니 (필요한 만큼)', '의자 (또는 작은 사다리)', '물티슈', '헌 옷 수거용 봉지 (50L 이상)'],
  },
  {
    id: 4,
    title: '예약이 확정된 후 서비스 취소 및 변경은 strongOpen 서비스 일자에서 3일 이전 까지strongClose만 가능합니다. ',
  },
  {
    id: 5,
    title:
      'strongOpen 귀금속, 현금 strongClose 등 귀중품의 분실 또는 파손을 미연에 방지하기 위해 strongOpen 별도로 보관 strongClose 부탁드립니다. ',
  },
  {
    id: 6,
    title:
      '서비스 현장에서 촬영한 strongOpen 서비스 전/후 공간 사진strongClose은 개인정보를 노출하지 않으면서 마케팅 및 홍보 목적으로 사용될 수 있습니다. ',
  },
  {
    id: 7,
    title: '처분할 의류들을 서비스 전에 strongOpen 미리 분리strongClose해주시면 서비스 시간이 단축됩니다 :)',
  },
];
