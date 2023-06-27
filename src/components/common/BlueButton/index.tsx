import React from 'react';
import * as S from './style';
interface BlueButtonProps {
  title: string;
  width?: string;
  onClick?: () => void;
}

function BlueButton({ title, width, onClick }: BlueButtonProps) {
  return (
    <S.BlueButton width={width} onClick={onClick}>
      {title}
    </S.BlueButton>
  );
}

export default BlueButton;
