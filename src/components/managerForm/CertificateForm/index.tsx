import React from 'react';

import { BsChevronDown } from 'react-icons/bs';
import * as G from '../style';
import * as S from './style';

function CertificateForm() {
  return (
    <S.CertificateForm>
      <G.SubTitle>
        보유하고 계신 <br />
        정리수납전문가 자격증을 선택해주세요.
      </G.SubTitle>

      <span>(1개만 선택가능)</span>

      <S.SelectButton type="button">
        자격증 선택하기
        <BsChevronDown />
      </S.SelectButton>
      <ul>
        <li>
          <S.OptionButton type="button">1급 (오프라인 취득)</S.OptionButton>
        </li>

        <li>
          <S.OptionButton type="button">2급 (오프라인 취득)</S.OptionButton>
        </li>

        <li>
          <S.OptionButton type="button">1급 (온라인 취득)</S.OptionButton>
        </li>

        <li>
          <S.OptionButton type="button">2급 (온라인 취득)</S.OptionButton>
        </li>

        <li>
          <S.OptionButton type="button">없음</S.OptionButton>
        </li>

        <li>
          <S.OptionButton type="button">기타</S.OptionButton>
        </li>
      </ul>
    </S.CertificateForm>
  );
}

export default CertificateForm;
