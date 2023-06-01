import * as S from './style';
import HeaderLayout from './HeaderLayout';
import { useMutation } from '@tanstack/react-query';
import { getAuthorize } from '@/apis/oauth';

function Header() {
  const { mutate: test } = useMutation(() => getAuthorize());

  return (
    <S.Header>
      <HeaderLayout mutate={test} />
    </S.Header>
  );
}

export default Header;
