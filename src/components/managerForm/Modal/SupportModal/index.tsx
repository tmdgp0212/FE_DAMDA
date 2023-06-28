import React from 'react';
import Image from 'next/image';

import * as U from '../UnCompleteModal/style';
import * as S from './style';

function SupportModal() {
  return (
    <S.SupportOverlay>
      <S.SupportModal textCenter={true} style={{ position: 'relative' }}>
        <Image src="/icons/check-circle-outline.svg" alt="check-circle-outline" width={96} height={96} />

        <h2>지원완료</h2>

        <p>
          열다의 매니저에 지원해주셔서 감사합니다. 🥰
          <br />
          상세 매니저 지원 내용은
          <br /> 카카오톡 알림을 통해 확인해주세요 :&#41;
        </p>

        <S.StyledLink href="/">
          <Image src="/icons/close-icon.svg" alt="close-icon" width={24} height={24} />
        </S.StyledLink>
      </S.SupportModal>
    </S.SupportOverlay>
  );
}

export default SupportModal;
