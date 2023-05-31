import * as S from './style';
import HeaderLayout from './HeaderLayout';
import { useMutation } from '@tanstack/react-query';
import { getAuthorize } from '@/apis/oauth';
import { useState } from 'react';
import Menu from './Menu';

function Header() {
  const { mutate: test } = useMutation(() => getAuthorize());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showVariants = {
    hidden: { x: 300 },
    visible: { x: 0 },
  };

  const hiddenVariants = {
    hidden: { x: 0 },
    visible: { x: 300 },
  };

  return (
    <>
      <S.Header isMenuOpen={isMenuOpen}>
        <HeaderLayout mutate={test} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </S.Header>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} showVariants={showVariants} hiddenVariants={hiddenVariants} />}
    </>
  );
}

export default Header;
