import React from 'react';
import { buttonPersonGroup } from '@/constants/mainButtonText';
import * as S from '@/styles/Main.styled';

function SecButtonGroup() {
  return (
    <>
      {buttonPersonGroup.map((item, index) => (
        <S.MainPersonButton key={item.title} itemIndex={index}>
          <p>{item.title}</p>
          <h2>{item.price}원</h2>
          <S.MainSvg index={index} />
        </S.MainPersonButton>
      ))}
    </>
  );
}

export default SecButtonGroup;
