import React from 'react';
import * as S from './style';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MenuProps {
  isMenuOpen: boolean;
  showVariants: {
    hidden: { x: number };
    visible: { x: number };
  };
  hiddenVariants: {
    hidden: { x: number };
    visible: { x: number };
  };
}

function Menu({ isMenuOpen, showVariants, hiddenVariants }: MenuProps) {
  return (
    <AnimatePresence>
      <S.MenuContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <S.MenuBar
          initial="hidden"
          animate="visible"
          variants={isMenuOpen ? showVariants : hiddenVariants}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <S.Section>
            <div className="title">서비스</div>
            <div className="links">
              <Link href={'/closet'}>옷장정리</Link>
              <Link href={'/sale'}>의류 판매 대행</Link>
            </div>
          </S.Section>
          <S.Section>
            <div className="title">열다와 함께해요</div>
            <div className="links">
              <Link href={'/apply'}>매니저 지원</Link>
            </div>
          </S.Section>
          <S.Section>
            <div className="title">여러분의 소리</div>
            <div className="links">
              <Link href={'/review'}>고객 후기</Link>
              <Link href={'/support'}>고객 센터</Link>
            </div>
          </S.Section>
        </S.MenuBar>
      </S.MenuContainer>
    </AnimatePresence>
  );
}

export default Menu;
