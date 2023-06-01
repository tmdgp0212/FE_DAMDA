/**
 * @description: 문장 안에 br이 있으면 <br />로 바꿔주는 함수 대신 직접 dangerouslySetInnerHTML 메소드를 사용하여 삽입을 해야하니 조심히 사용할 것
 * @param {string} text
 * @return {object} { __html: string }
 * */
export const makeBrTagsBybr = (text: string): { __html: string } => {
  const replacedText = text.replaceAll('br', '<br />');
  return { __html: replacedText };
};
