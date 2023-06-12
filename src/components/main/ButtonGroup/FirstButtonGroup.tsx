import * as S from '@/styles/Main.styled';
import { buttonElementGroup, buttonRequestGroup } from '@/constants/mainButtonText';
import { BsArrowUpRight } from 'react-icons/bs';
import React from 'react';
import Link from 'next/link';

function FirstButtonGroup() {
  return (
    <>
      {buttonElementGroup.map((element, index) => {
        if (index === 1)
          return (
            <React.Fragment key={index}>
              <S.MainRequestGroupContainer>
                <div className="desc">
                  <BsArrowUpRight />
                  <p>이렇게 진행됩니다!</p>
                </div>
                <div className="btn">
                  {buttonRequestGroup.map((item, itemIndex) => (
                    <Link href={item.to} key={itemIndex}>
                      <S.MainRequestButton key={itemIndex}>{item.title}</S.MainRequestButton>
                    </Link>
                  ))}
                </div>
              </S.MainRequestGroupContainer>
              <S.MainContentButton index={index}>
                {index + 1}. {element}
              </S.MainContentButton>
            </React.Fragment>
          );

        return (
          <S.MainContentButton index={index} key={element}>
            {index + 1}. {element}
          </S.MainContentButton>
        );
      })}
    </>
  );
}

export default FirstButtonGroup;
