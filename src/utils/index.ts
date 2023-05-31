/**
 * @description: 문장 안에 br이 있으면 <br />로 바꿔주는 함수
 * @param {string} text
 * */
export const makeBrTagsBybr = (text: string) => {
  console.log(text.replace('br', '<br />'));
};
