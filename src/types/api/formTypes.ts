/**
 * 질문 식별자
 *
 * 이 식별자는 다양한 질문 항목을 식별하는 데 사용됩니다.
 * 각 식별자는 해당하는 질문 항목을 나타냅니다.
 *
 * @remarks
 * - AFEWSERVINGS: 몇인분
 * - SERVICEDURATION: 서비스 사용시간
 * - ADDRESS: 서비스 주소
 * - SERVICEDATE: 서비스 날짜와 시간
 * - PARKINGAVAILABLE: 주차 가능 여부
 * - APPLICANTNAME: 신청인 이름
 * - APPLICANTCONACTINFO: 신청인 전화번호
 * - LEARNEDROUTE: 알게된 경로
 * - REQUIREDGUIDELINES: 필수 안내사항
 * - OPTIONAL: 추가적인 자료
 * - TITLE: 제목
 * - CODE: 프로모션 코드
 */
export type QuestionIdentifier =
  | 'AFEWSERVINGS'
  | 'SERVICEDURATION'
  | 'ADDRESS'
  | 'SERVICEDATE'
  | 'PARKINGAVAILABLE'
  | 'APPLICANTNAME'
  | 'APPLICANTCONACTINFO'
  | 'LEARNEDROUTE'
  | 'REQUIREDGUIDELINES'
  | 'OPTIONAL'
  | 'TITLE'
  | 'CODE';

/**
 * 질문의 형식 식별자
 *
 * 이 식별자는 질문지의 타입을 나타내는 데 사용됩니다.
 *
 * @remarks
 * - DATE: 날짜
 * - STRING: Input 문자
 * - RADIO: Radio Button
 * - SELECT: Select Box
 * - TITLE: 제목을 나타나기 위한 타입
 */
export type QuestionType = 'DATE' | 'STRING' | 'RADIO' | 'SELECT' | 'TITLE';
