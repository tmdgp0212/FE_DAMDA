import * as S from './style';
import HeaderLayout from './HeaderLayout';
import { useState } from 'react';
import Menu from './Menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <S.Header isMenuOpen={isMenuOpen}>
        <HeaderLayout isMenuOpen={isMenuOpen} menuHandler={setIsMenuOpen} />
      </S.Header>
      <Menu isMenuOpen={isMenuOpen} menuHandler={setIsMenuOpen} />
    </>
  );
}

export default Header;
