import * as S from './style';
import HeaderLayout from './HeaderLayout';
import { useState, useContext, useEffect } from 'react';
import { LayoutContext } from '../Layout';
import Menu from './Menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error();
  }
  const { setDisabledScroll } = context;

  const menuHandler = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setDisabledScroll(false);
    } else {
      setIsMenuOpen(true);
      setDisabledScroll(true);
    }
  };

  return (
    <>
      <S.Header isMenuOpen={isMenuOpen}>
        <HeaderLayout isMenuOpen={isMenuOpen} menuHandler={menuHandler} />
      </S.Header>
      <Menu isMenuOpen={isMenuOpen} menuHandler={menuHandler} />
    </>
  );
}

export default Header;
