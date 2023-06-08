import * as S from './style';
import HeaderLayout from './HeaderLayout';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import useAuthStore from '@/store/auth';
import { validateToken } from '@/apis/auth';

function Header() {
  const { user, logout } = useAuthStore((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // validateToken(logout);
  }, []);

  return (
    <>
      <S.Header isMenuOpen={isMenuOpen}>
        <HeaderLayout user={user} isMenuOpen={isMenuOpen} menuHandler={setIsMenuOpen} logout={logout} />
      </S.Header>
      <Menu isMenuOpen={isMenuOpen} menuHandler={setIsMenuOpen} />
    </>
  );
}

export default Header;
