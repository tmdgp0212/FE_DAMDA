import * as S from './style';
import Image from 'next/image';

interface BannerSlideProps {
  slideItems: string[];
  reverse?: boolean;
}

function BannerSlide({ slideItems, reverse }: BannerSlideProps) {
  return (
    <S.SlideWrapper reverse={reverse}>
      <S.SlideItems
        animate={{ x: reverse ? ['0%', '100%'] : ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
      >
        {slideItems.map((item, idx) => (
          <S.SlideItem key={idx}>
            <Image src={`${item}`} alt="열다 서비스 이미지" width={130} height={130} />
          </S.SlideItem>
        ))}
      </S.SlideItems>
      <S.SlideItems
        animate={{ x: reverse ? ['0%', '100%'] : ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
      >
        {slideItems.map((item, idx) => (
          <S.SlideItem key={idx}>
            <Image src={`${item}`} alt="열다 서비스 이미지" width={130} height={130} />
          </S.SlideItem>
        ))}
      </S.SlideItems>
    </S.SlideWrapper>
  );
}

export default BannerSlide;
