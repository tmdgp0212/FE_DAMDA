import React from 'react';
import * as S from './style';
interface BlueButtonProps {
  title: string;
  width?: string;
}

function BlueButton({ title, width }: BlueButtonProps) {
  return <S.BlueButton width={width}>{title}</S.BlueButton>;
}

export default BlueButton;
