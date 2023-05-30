import React from 'react';
import * as S from '@/styles/Main.styled';
import FirstButtonGroup from '@/components/main/FirstButtonGroup';
import { MainContentSection, MainPersonButton, MainSvg } from '@/styles/Main.styled';
import { buttonPersonGroup } from '@/constants/mainButtonText';

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
        <S.MainContentSection>
          <S.MainButtonGroupContainer groupIndex={0}>{<FirstButtonGroup />}</S.MainButtonGroupContainer>
        </S.MainContentSection>
        <S.MainContentSection>
          <S.MainDescContainer>
            <span>🤔</span>
            <p>우리집은 비용이 얼마나 들까요?</p>
            <h1>
              열다 서비스 <br /> 가구 당 평균 가격
            </h1>
          </S.MainDescContainer>
          <S.MainButtonGroupContainer groupIndex={1}>
            {buttonPersonGroup.map((item, index) => (
              <S.MainPersonButton key={item.title} itemIndex={index}>
                <p>{item.title}</p>
                <h2>{item.price}원</h2>
                <S.MainSvg index={index} />
              </S.MainPersonButton>
            ))}
          </S.MainButtonGroupContainer>
        </S.MainContentSection>
        <S.MainContentSection>
          <S.MainDescContainer>
            <span>⏳</span>
            <p>합리적이고 투명한 </p>
            <h1>
              시간당 가격 정찰제를 <br /> 도입했어요
            </h1>
          </S.MainDescContainer>
        </S.MainContentSection>
      </S.MainContentContainer>
    </S.MainContainer>
  );
}

export default MainLayOut;
