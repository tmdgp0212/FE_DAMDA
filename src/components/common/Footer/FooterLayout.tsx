import React, { useState } from 'react';
import ArrowDown from '../../../../public/icons/angle-down.svg';
import ArrowUp from '../../../../public/icons/angle-up.svg';
import * as S from './style';
import PolicyModal from './PolicyModal';

interface FooterProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum EPolicy {
  TERMS = 'TERMS',
  POLICY = 'POLICY',
}

function FooterLayout({ isOpen, setIsOpen }: FooterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setModalContents] = useState<EPolicy>(EPolicy.TERMS);

  const modalOpen = (type: EPolicy) => {
    setIsModalOpen(true);
    setModalContents(type);
  };

  return (
    <>
      <S.Folder onClick={() => setIsOpen((prev) => !prev)}>
        회사 정보 보기
        {isOpen ? <ArrowDown /> : <ArrowUp />}
      </S.Folder>
      {!isOpen && (
        <S.Footer>
          <div className="bold company">주식회사 열다컴퍼니</div>
          <div className="contents">
            <div className="row">
              <span className="header">사업자 등록번호</span>
              <span>793-87-02566</span>
            </div>
            <div className="row">
              <span className="header">주소</span>
              <span>서울특별시 마포구 백범로31길 21, 본관 5층 527호 (공덕동, 서울창업허브)</span>
            </div>
            <div className="row">
              <span className="header">대표자</span>
              <span>임찬솔</span>
            </div>
            <div className="row">
              <span className="header">연락처</span>
              <span>010-9963-6287</span>
            </div>
          </div>
          <div className="rule">
            <span onClick={() => modalOpen(EPolicy.TERMS)}>이용약관</span>
            <span className="bold" onClick={() => modalOpen(EPolicy.POLICY)}>
              개인정보처리방침
            </span>
          </div>
        </S.Footer>
      )}
      {isModalOpen && <PolicyModal setIsModalOpen={setIsModalOpen} contents={modalContents} />}
    </>
  );
}

export default FooterLayout;
