import React from 'react';
import * as S from './style';

interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

function ModalContainer({ setIsModalOpen, children }: ModalProps) {
  const modalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    setIsModalOpen(false);
  };

  return (
    <S.ModalBackground onClick={modalClose}>
      <S.Modal>{children}</S.Modal>
    </S.ModalBackground>
  );
}

export default ModalContainer;
