import * as S from './style';
import Link from 'next/link';
import React from 'react';
import { UserState } from '@/store/auth';
import Image from 'next/image';

interface HeaderProps {
  user: UserState;
  isMenuOpen: boolean;
  menuHandler: React.Dispatch<React.SetStateAction<boolean>>;
  toSurvey: () => void;
  isInView: boolean | undefined;
}

function HeaderLayout({ user, isMenuOpen, menuHandler, toSurvey, isInView }: HeaderProps) {
  return (
    <>
      <S.Logo className="ir-text">
        <Link href={'/'}>열다</Link>
      </S.Logo>
      <S.HeaderButtons>
        <S.EstimateButton
          onClick={toSurvey}
          initial={{ opacity: 1 }}
          animate={{ opacity: isInView ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          무료견적
        </S.EstimateButton>
        <S.LoginButton className="ir-text">
          {user.isLogin ? (
            <S.ProfileImage>
              <Image src={user.profileImage} alt="profileImage" fill />
            </S.ProfileImage>
          ) : (
            <Link href={'/login'}>login</Link>
          )}
        </S.LoginButton>
        <S.SideMenuButton className="ir-text" isMenuOpen={isMenuOpen} onClick={() => menuHandler((prev) => !prev)}>
          menu
        </S.SideMenuButton>
      </S.HeaderButtons>
    </>
  );
}

export default HeaderLayout;
