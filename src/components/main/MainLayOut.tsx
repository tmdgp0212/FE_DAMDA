import React from 'react';
import * as S from '@/styles/Main.styled';
import { BsArrowUpRight } from 'react-icons/bs';

const buttonElementGroup = [
  '설문을 작성하고 간편하게 신청하세요!',
  '정리수납 전문가들을 연결해드립니다!',
  '정리 서비스와 함께 정리 팁도 알려드려요!',
  '결제는 서비스를 받으신 후에!',
];

const buttonRequestGroup = ['간편 견적', '상담 신청'];

function MainLayOut() {
  return (
    <S.MainContainer>
      <S.MainTitleContainer>
        <h1>
          내 옷장 속 <br /> 숨겨진 가능성을 <br /> 열다
        </h1>
        <p>
          옷장을 활짝 열어 <br /> 숨겨진 공간과 <br /> 수익 기회를 찾아드려요
        </p>
      </S.MainTitleContainer>
      <S.MainContentContainer>
        <S.MainButtonGroupContainer>
          {buttonElementGroup.map((element, index) => {
            if (index === 1)
              return (
                <>
                  <S.MainRequestGroupContainer>
                    <div className="desc">
                      <BsArrowUpRight />
                      <p>이렇게 진행됩니다!</p>
                    </div>
                    <div className="btn">
                      {buttonRequestGroup.map((item) => (
                        <S.MainRequestButton key={item}>{item}</S.MainRequestButton>
                      ))}
                    </div>
                  </S.MainRequestGroupContainer>
                  <S.MainContentButton index={index} key={index}>
                    {index + 1}. {element}
                  </S.MainContentButton>
                </>
              );

            return (
              <S.MainContentButton index={index} key={index}>
                {index + 1}. {element}
              </S.MainContentButton>
            );
          })}
        </S.MainButtonGroupContainer>
      </S.MainContentContainer>
    </S.MainContainer>
  );
}

export default MainLayOut;
