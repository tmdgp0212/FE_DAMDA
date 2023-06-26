import React, { useState } from 'react';
import { buttonPriceGroup } from '@/constants/mainButtonText';
import * as S from '@/styles/Main.styled';
import { BsArrowUpLeft, BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';

function ThirdButtonGroup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {buttonPriceGroup.map((item, index) => {
        if (index === 3) {
          return (
            <Link key={index} href="/usersurvey">
              <S.MainRequestButton width={45}>{item.title}</S.MainRequestButton>
            </Link>
          );
        }
        if (index === 2) {
          if (isOpen) {
            return (
              <S.MainPriceContent key={index} onClick={() => setIsOpen(false)}>
                <div className="head">
                  <p>{item.title}</p>
                  <h2>{item.price}원</h2>
                </div>
                <div className="divider" />
                <div className="desc">
                  <h1>열다 기본 요금</h1>
                  <span>
                    매니저 1인 당 <br />
                    <strong>시간 당 2만원</strong> 최소 3시간 이상 <br />
                    현장에서 작업시간이 추가로 발생할 경우, <br />
                    시간당 추가 요금이 발생합니다.
                  </span>
                </div>
                <BsArrowUpLeft />
              </S.MainPriceContent>
            );
          }
          return (
            <S.MainPriceButton onClick={() => setIsOpen(true)} key={index} index={index}>
              <p>{item.title}</p>
              <h2>{item.price}원</h2>
              <BsChevronDown />
              <p className="how">
                어떻게 이런 가격이 <br /> 나오나요?
              </p>
            </S.MainPriceButton>
          );
        }

        return (
          <S.MainPriceButton key={index} index={index}>
            <p>{item.title}</p>
            <h2>{item.price}원</h2>
          </S.MainPriceButton>
        );
      })}
    </>
  );
}

export default ThirdButtonGroup;
