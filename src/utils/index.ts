/**
 * @description: 문장 안에 br, strongOpen, strongClose가 있으면 각각 <br />, <strong>, </strong> 태그로 바꿔주는 함수. 대신 직접 dangerouslySetInnerHTML 메소드를 사용하여 삽입을 해야하니 조심히 사용할 것
 * @param {string} text
 * @return {object} { __html: string }
 * */
export const replaceStringsWithTags = (text: string): { __html: string } => {
  const br = text.replaceAll('br', '<br />');
  const strongOpen = br.replaceAll('strongOpen', '<strong>');
  const strongClose = strongOpen.replaceAll('strongClose', '</strong>');
  return { __html: strongClose };
};
