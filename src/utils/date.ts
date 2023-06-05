/**
 * @description 해당 후기의 작성일로부터 시간경과에 따라 아래와 같이 표기됩니다
 *  D+6 까지 : N일 전
 *  D+7 ~ 30 : N주 전
 *  D+32 ~ 90 : N달 전
 *  3달 이후 : 날짜
 *
 * @param date
 */

export const dateFormatter = (date: string): string => {
  const createdDate = new Date(date);
  const nowDate = new Date();
  const diff = (nowDate.getTime() - createdDate.getTime()) / 1000;
  const createdDateToString = `${createdDate.getFullYear()}-${String(createdDate.getMonth() + 1).padStart(
    2,
    '0',
  )}-${String(createdDate.getDate()).padStart(2, '0')}`;

  const times = [
    { name: '달', milliSeconds: 60 * 60 * 24 * 30 },
    { name: '주', milliSeconds: 60 * 60 * 24 * 7 },
    { name: '일', milliSeconds: 60 * 60 * 24 },
  ];

  if (diff > 60 * 60 * 24 * 30 * 3) return createdDateToString;

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }

  return createdDateToString;
};
