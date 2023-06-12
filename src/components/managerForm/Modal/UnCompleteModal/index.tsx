import React from 'react';
import * as S from './style';

function UnCompleteModal() {
  return (
    <S.Overlay>
      <S.Modal textCenter={true}>
        <header>
          <h2>아직 작성이 완료 되지 않았어요.🥹</h2>
          <p>
            현재까지 작성해주신 내용은 자동으로
            <br /> 저장되어 나중에 이어서 작성하실 수 있어요.
          </p>
          <strong>이전 화면으로 돌아가시겠습니까?</strong>
        </header>

        <S.ButtonGrop>
          <button type="button">돌아가기</button>
          <button type="button">마저 작성하기</button>
        </S.ButtonGrop>
      </S.Modal>
    </S.Overlay>
  );
}

export default UnCompleteModal;
