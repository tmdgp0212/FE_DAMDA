import React from 'react';
import * as S from '@/styles/Main.styled';
import FirstButtonGroup from '@/components/main/ButtonGroup/FirstButtonGroup';
import { BsArrowUpRight } from 'react-icons/bs';
import MainResellerGraph from '@/components/main/MainResellerGraph';
import SecButtonGroup from '@/components/main/ButtonGroup/SecButtonGroup';
import ThirdButtonGroup from '@/components/main/ButtonGroup/ThirdButtonGroup';
import UserReview from '@/components/main/UserReview';

function MainLayOut() {
  return (
    <S.MainContainer>
      {<S.MainFABContainer>asdf</S.MainFABContainer>}
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
            <SecButtonGroup />
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
          <S.MainButtonGroupContainer groupIndex={2}>
            <ThirdButtonGroup />
          </S.MainButtonGroupContainer>
        </S.MainContentSection>
        <S.MainContentSection>
          <S.MainDescContainer>
            <span>💸</span>
            <h1>
              안 입는 옷도 <br />
              새로운 방향으로
            </h1>
            <p>
              서비스를 이용하신 후에 정리된 안 입는 옷은 <br /> 열다에서 전문 셀러를 통해 수익화하세요
            </p>
          </S.MainDescContainer>
          <MainResellerGraph />
        </S.MainContentSection>
        <S.MainContentSection>
          <S.MainDescContainer>
            <span>‍🙆‍♀️</span>
            <h1>
              먼저 열다를 만나신 분들의 <br /> 이야기도 들어보세요
            </h1>
          </S.MainDescContainer>
          <UserReview />
        </S.MainContentSection>
        <S.MainContentSection>
          <S.MainDescContainer>
            <span>🚚</span>
            <h1>지금 열다는</h1>
            <p>
              서울과 경기 일부 지역에서만 <br /> 서비스 하고 있습니다. <br /> 다른 지역으로도 확대할 예정이니 <br />
              조금만 기다려주세요!
            </p>
            <S.MainYoldaService src="/img/yoldaService.png" />
          </S.MainDescContainer>
        </S.MainContentSection>
      </S.MainContentContainer>
    </S.MainContainer>
  );
}

export default MainLayOut;
