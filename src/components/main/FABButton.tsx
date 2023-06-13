import React, { MutableRefObject } from 'react';
import * as S from '@/styles/Main.styled';
import { FABButtonTexts } from '@/constants/FABButton';
import { BiArrowToTop } from 'react-icons/bi';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useRouter } from 'next/router';

function FabButton({ goTop }: { goTop: () => void }) {
  const router = useRouter();

  const handleClick = (type: string) => {
    console.log('type', type);
    switch (type) {
      case 'goTop':
        goTop();
        break;
      case 'kakao':
        router.push('/kakao');
        break;
    }
  };

  return (
    <S.MainFABContainer>
      {FABButtonTexts.map((item, index) => (
        <S.MainFABButton color={item.color} key={index} onClick={() => handleClick(item.type)}>
          {item.type === 'goTop' ? <BiArrowToTop /> : <RiKakaoTalkFill />}
        </S.MainFABButton>
      ))}
    </S.MainFABContainer>
  );
}

export default FabButton;
