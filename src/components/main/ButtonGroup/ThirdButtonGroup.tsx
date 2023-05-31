import React from 'react';
import { buttonPriceGroup } from '@/constants/mainButtonText';
import * as S from '@/styles/Main.styled';
import { BsChevronDown } from 'react-icons/bs';

function ThirdButtonGroup() {
  return (
    <>
      {buttonPriceGroup.map((item, index) => {
        if (index === 3) {
          return (
            <S.MainRequestButton key={item.title} width={45}>
              {item.title}
            </S.MainRequestButton>
          );
        }
        return (
          <S.MainPriceButton key={item.title} index={index}>
            <p>{item.title}</p>
            <h2>{item.price}원</h2>
            {index === 2 && <BsChevronDown />}
          </S.MainPriceButton>
        );
      })}
    </>
  );
}

export default ThirdButtonGroup;
