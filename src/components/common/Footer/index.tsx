import { useState } from 'react';
import FooterLayout from './FooterLayout';
import * as S from './style';

function Footer() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <S.FooterContainer>
      <FooterLayout isOpen={isOpen} setIsOpen={setIsOpen} />
    </S.FooterContainer>
  );
}

export default Footer;
