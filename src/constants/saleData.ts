import { ProcedureData } from '../types/constants/Procedure';

export const saleProcedureData: ProcedureData[] = [
  {
    title: '1단계. 판매할 의류 잡화 정보 수집',
    img: '/img/sale_card1.png',
    content: [
      '고객님으로부터 서비스 대상에 맞는 의류/잡화 정보를 수집해요.',
      '서비스 신청 양식을 통해 사진을 포함한 상품 기본 정보를 접수해요.',
    ],
  },
  {
    title: '2단계. 검증된 셀러들이 다양한 채널에서 판매',
    img: '/img/sale_card2.png',
    content: [
      '중O나라, 당O마켓,번O장터 등 모든 중고의류 시장에서 동시다발적으로 판매를 진행해요.',
      '고객님이 판매가 범위를 직접 설정하면 그 범위 내에서 판매를 진행해요.',
      '판매 제안, 판매 채널 현황 등 판매가 진행되고 있는 상황을 알려드려요.',
    ],
  },
  {
    title: '3단계. 판매 확정 및 상품 발송',
    img: '/img/sale_card3.png',
    content: [
      '최종적으로 구매자가 결정되면 셀러들로부터 거래 정보를 전달받아 고객님께 전달드려요.',
      '고객님은 전달받은 거래 정보에 따라 상품을 구매자에게 발송해요.',
    ],
  },
  {
    title: '4단계. 정산 받기',
    img: '/img/sale_card4.png',
    content: ['상품 판매가 완료되면 판매 금액에 따라 대행 수수료를 차감한 후 정산해드려요.'],
  },
];

export const salePopupData = [
  {
    title: '나에게는 안입는 옷이 누군가에게는 It item!',
    subtitle: '수익창출',
    description: '옷장안에 잠들어 있는 옷으로br strongOpen부가 수익을 창출strongClose하세요.',
    height: '150px',
  },
  {
    title: '간단한 수거 과정으로 옷을 판매하세요.',
    subtitle: '수거, 판매, 매입 자동화',
    description:
      '전문셀러들이 현재 가장 핫한 판매 채널에서 br 다양한 방법으로 고객님의 옷을 판매합니다! br br 오직 문 앞에만 두면, strongOpen 수거와 판매/매입strongClose을 br strongOpen한번에 진행strongClose해드립니다! br br 지금 바로 strongOpen문 앞까지 찾아가는strongClose 특별한 서비스를br경험해보세요!',
    height: '450px',
  },
  {
    title: '매년 버려지는 옷은 26만톤!',
    subtitle: '환경보호',
    description:
      '안입는 옷은 버리지 말고 strongOpen판매하여 수익화strongClose하고 br strongOpen환경도 보호strongClose해요!',
    height: '150px',
  },
];
