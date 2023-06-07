import Link from 'next/link';
import * as S from './style';
import React from 'react';

interface HeaderProps {
  isMenuOpen: boolean;
  menuHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderLayout({ isMenuOpen, menuHandler }: HeaderProps) {
  return (
    <>
      <S.Logo className="ir-text">
        <Link href={'/'}>열다</Link>
      </S.Logo>
      <S.HeaderButtons>
        {/* 무료견적 버튼은 홈 화면에서 상단탭을 지나면(간편견적, 상담신청 버튼을 지나면) 보여지도록 */}
        <S.EstimateButton>무료견적</S.EstimateButton>
        <S.LoginButton className="ir-text">
          <Link href={'/login'}>login</Link>
        </S.LoginButton>
        <S.SideMenuButton className="ir-text" isMenuOpen={isMenuOpen} onClick={() => menuHandler((prev) => !prev)}>
          menu
        </S.SideMenuButton>
      </S.HeaderButtons>
    </>
  );
}

export default HeaderLayout;
