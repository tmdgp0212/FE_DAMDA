import React from 'react';
import ModalContainer from '../../ModalContainer';
import Terms from './Terms';
import Policy from './Policy';
import * as S from './style';
import { EPolicy } from '../FooterLayout';

interface PolicyProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contents: EPolicy;
}

function PolicyModal({ setIsModalOpen, contents }: PolicyProps) {
  return (
    <ModalContainer setIsModalOpen={setIsModalOpen}>
      <S.PolicyModal>
        <S.Title>{contents === EPolicy.TERMS ? '이용약관' : '개인정보 처리방침'}</S.Title>
        {contents === EPolicy.TERMS ? <Terms /> : <Policy />}
      </S.PolicyModal>
    </ModalContainer>
  );
}

export default PolicyModal;
