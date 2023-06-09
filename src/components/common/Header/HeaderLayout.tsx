import * as S from './style';
import Link from 'next/link';
import React from 'react';
import { UserState } from '@/store/auth';
import Image from 'next/image';

interface HeaderProps {
  user: UserState;
  isMenuOpen: boolean;
  menuHandler: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
}

function HeaderLayout({ user, isMenuOpen, menuHandler, logout }: HeaderProps) {
  return (
    <>
      <S.Logo className="ir-text">
        <Link href={'/'}>열다</Link>
      </S.Logo>
      <S.HeaderButtons>
        {/* 무료견적 버튼은 홈 화면에서 상단탭을 지나면(간편견적, 상담신청 버튼을 지나면) 보여지도록 */}
        <S.EstimateButton>무료견적</S.EstimateButton>
        <S.LoginButton className="ir-text">
          {/* {user.isLogin ? (
            <S.ProfileImage>
              <Image src={user.profileImage} alt="profileImage" fill />
            </S.ProfileImage>
          ) : (
            <Link href={'/login'}>login</Link>
            )} */}
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
