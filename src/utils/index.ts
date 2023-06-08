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
