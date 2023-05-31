import * as S from './style';
import HeaderLayout from './HeaderLayout';
import { useMutation } from '@tanstack/react-query';
import { getAuthorize } from '@/apis/oauth';
import { useState, useContext, useEffect } from 'react';
import Menu from './Menu';
import { LayoutContext } from '../Layout';

function Header() {
  const { mutate: test } = useMutation(() => getAuthorize());
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
        <HeaderLayout mutate={test} isMenuOpen={isMenuOpen} menuHandler={menuHandler} />
      </S.Header>
      <Menu isMenuOpen={isMenuOpen} menuHandler={menuHandler} />
    </>
  );
}

export default Header;
