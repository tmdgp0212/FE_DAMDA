import React from 'react';
import * as S from '@/styles/Main.styled';
import FirstButtonGroup from '@/components/main/FirstButtonGroup';
import { buttonPersonGroup, buttonPriceGroup } from '@/constants/mainButtonText';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import MainResellerGraph from '@/components/main/MainResellerGraph';

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
          <S.MainButtonGroupContainer groupIndex={2}>
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
          <S.MainReSellerContent>
            <h1>
              판매액이 높을수록 <br /> 수수료가 낮아집니다.
              <BsArrowUpRight />
            </h1>
            <p>판매 금액대별 대행 수수료</p>
            <MainResellerGraph />
          </S.MainReSellerContent>
        </S.MainContentSection>
        <S.MainContentSection>
          <S.MainDescContainer>
            <span>‍🙆‍♀️</span>
            <h1>
              먼저 열다를 만나신 분들의 <br /> 이야기도 들어보세요
            </h1>
          </S.MainDescContainer>
        </S.MainContentSection>
        <S.MainUserReviewContainer></S.MainUserReviewContainer>
      </S.MainContentContainer>
    </S.MainContainer>
  );
}

export default MainLayOut;
