import Link from 'next/link';
import * as S from './style';
import React, { useEffect, useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';

interface HeaderProps {
  mutate: UseMutateFunction<void, unknown, void, unknown>;
  isMenuOpen: boolean;
  menuHandler: () => void;
}

function HeaderLayout({ mutate, isMenuOpen, menuHandler }: HeaderProps) {
  return (
    <>
      <S.Logo className="ir-text">
        <Link href={'/'}>열다</Link>
      </S.Logo>
      <S.HeaderButtons>
        {/* 무료견적 버튼은 홈 화면에서 상단탭을 지나면(간편견적, 상담신청 버튼을 지나면) 보여지도록 */}
        <S.EstimateButton>무료견적</S.EstimateButton>
        <S.LoginButton className="ir-text" onClick={() => mutate()}>
          login
        </S.LoginButton>
        <S.SideMenuButton className="ir-text" isMenuOpen={isMenuOpen} onClick={menuHandler}>
          menu
        </S.SideMenuButton>
      </S.HeaderButtons>
    </>
  );
}

export default HeaderLayout;
