import React, { useRef } from 'react';
import * as S from '@/styles/Main.styled';
import { mainContentSection } from '@/constants/mainContentSection';
import { replaceStringsWithTags } from '@/utils';
import FABButton from '@/components/main/FABButton';

function MainLayOut() {
  const mainCotainerRef = useRef<HTMLDivElement | null>(null);

  const goToTop = () => {
    if (mainCotainerRef.current) {
      mainCotainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <S.MainContainer ref={mainCotainerRef}>
      {/* <FABButton goTop={goToTop} /> */}
      <S.MainTitleContainer>
        <h1>
          내 옷장 속 <br /> 숨겨진 가능성을 <br /> 열다
        </h1>
        <p>
          옷장을 활짝 열어 <br /> 숨겨진 공간과 <br /> 수익 기회를 찾아드려요
        </p>
      </S.MainTitleContainer>
      <S.MainContentContainer>
        {mainContentSection.map((item, index) => (
          <S.MainContentSection key={index}>
            {item.emoji && (
              <S.MainDescContainer>
                <span>{item.emoji}</span>
                {item.reverse ? (
                  <>
                    {item.h1 && <h1 dangerouslySetInnerHTML={replaceStringsWithTags(item.h1)}></h1>}
                    {item.p && <p dangerouslySetInnerHTML={replaceStringsWithTags(item.p)}></p>}
                  </>
                ) : (
                  <>
                    {item.p && <p dangerouslySetInnerHTML={replaceStringsWithTags(item.p)}></p>}
                    {item.h1 && <h1 dangerouslySetInnerHTML={replaceStringsWithTags(item.h1)}></h1>}
                  </>
                )}
                {item.type === 'image' && <S.MainYoldaService src="/img/yoldaService.png" />}
              </S.MainDescContainer>
            )}
            {item.type === 'button' ? (
              <S.MainButtonGroupContainer groupIndex={index}>{item.contents}</S.MainButtonGroupContainer>
            ) : (
              item.contents
            )}
          </S.MainContentSection>
        ))}
      </S.MainContentContainer>
    </S.MainContainer>
  );
}

export default MainLayOut;
