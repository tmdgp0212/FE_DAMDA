import { QuestionIdentifier } from '@/types/api/formTypes';

/**
 * @description: 문장 안의 문자열을 태그로 바꿔주는 함수. 대신 직접 dangerouslySetInnerHTML 메소드를 사용하여 삽입을 해야하니 조심히 사용할 것
 * @param {string} text
 * @return {object} { __html: string }
 * */
export const replaceStringsWithTags = (text: string): { __html: string } => {
  const br = text.replaceAll('br', '<br />');
  const strongOpen = br.replaceAll('strongOpen', '<strong>');
  const strongClose = strongOpen.replaceAll('strongClose', '</strong>');
  const anchorOpen = strongClose.replaceAll(
    'anchorOpen',
    '<a href="https://general-kiwi-162.notion.site/s-PICK-ce96b773727142d5bea0a6bb96e80057">',
  );
  const anchorClose = anchorOpen.replaceAll('anchorClose', '</a>');
  const uOpen = anchorClose.replaceAll('uOpen', '<u>');
  const uClose = uOpen.replaceAll('uClose', '</u>');
  return { __html: uClose };
};

export const convertQuestionIdentifierToKorean = (questionIdentifier: QuestionIdentifier) => {
  switch (questionIdentifier) {
    case 'AFEWSERVINGS':
      return '몇인분';
    case 'SERVICEDURATION':
      return '서비스 사용시간';
    case 'ADDRESS':
      return '서비스 주소';
    case 'SERVICEDATE':
      return '서비스 날짜와 시간';
    case 'PARKINGAVAILABLE':
      return '주차 가능 위치';
    case 'APPLICANTNAME':
      return '이름';
    case 'APPLICANTCONACTINFO':
      return '연락처';
    case 'LEARNEDROUTE':
      return '저는 열다를...';
    case 'RESERVATIONENTER':
      return '들어갈 수 있는 곳';
    case 'RESERVATIONNOTE':
      return '요청, 주의사항';
    case 'TITLE':
      return '제목';
    case 'SALECODE':
      return '코드';
  }
};

export const getTotalPrice = (time: number, person: number) => {
  let price = 0;
  let perPerson = 0;

  switch (person) {
    case 1:
      if (time === 3) {
        price = 59900;
        perPerson = 1;
      }
      if (time === 4) {
        price = 79900;
        perPerson = 1;
      }
      if (time === 5) {
        price = 99900;
        perPerson = 1;
      }
      break;
    case 2:
    case 3:
      if (time === 3) {
        price = 119900;
        perPerson = 2;
      }
      if (time === 4) {
        price = 159900;
        perPerson = 2;
      }
      if (time === 5) {
        price = 199900;
        perPerson = 2;
      }
      break;
    case 4:
      if (time === 4) {
        price = 159900;
        perPerson = 4;
      }
      if (time === 5) {
        price = 199900;
        perPerson = 4;
      }
      if (time === 6) {
        price = 239900;
        perPerson = 4;
      }
      break;
  }
  return { price, perPerson };
};
