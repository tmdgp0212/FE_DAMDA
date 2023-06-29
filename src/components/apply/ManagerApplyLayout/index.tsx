import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ManagerApplyFamilyImg from 'public/img/managerApplyFamily.png';
import ManagerApplyBenefitImg from 'public/img/managerApplyBenefit.png';
import FrequentlyAskedQuestions from '@/components/common/FAQ/FrequentlyAskedQuestions';
import { managerApplyFAQs } from '@/constants/managerApplyFAQs';

import * as S from './style';
import { FiArrowUpRight } from 'react-icons/fi';

function ManagerApplyLayout() {
  return (
    <>
      <S.FamilyContainer style={{ marginTop: '-52px' }}>
        <Image src={ManagerApplyFamilyImg} alt="매니저 지원 장려 영역 이미지" fill />

        <S.Description>
          <h2>
            열다의 가족이
            <br />
            되어주세요
          </h2>

          <p>
            정리 정돈,
            <br /> 아무나 하는 거 아니잖아요. <br />
            당신의 재능을 수익화 하세요!
          </p>

          <Link href="/manager-form">
            매니저 지원하기
            <FiArrowUpRight />
          </Link>
        </S.Description>
      </S.FamilyContainer>

      <S.PreferenceContainer>
        <h2>
          열다에서는
          <br />
          이런 분을 찾고 있어요
        </h2>

        <p>
          무언가를 정리하는 것에서 희열😄을 느끼시나요?
          <br />
          열다는 정리 또한 👨‍🎨예술의 영역이라고 생각합니다.
          <br />
          본인의 정리 재능으로 열다에서 고객을
          <br />
          만나고 수익을 창출💰하세요.
          <br />
          본인의 정리스킬을 고객과 매니저에게
          <br />
          나누며 같이 성장📈하세요.
        </p>
      </S.PreferenceContainer>

      <S.BenefitContainer>
        <S.Title>
          <h2>열다 매니저 혜택</h2>

          <p>열다의 매니저가 되시면 이런 혜택을 받으실수 있어요!</p>
        </S.Title>

        <Image src={ManagerApplyBenefitImg} alt="매니저 혜택 영역 이미지" width={370} height={300} />

        <S.StyleWrapper>
          <FrequentlyAskedQuestions type="manager-apply" enteredFAQs={managerApplyFAQs} />
          <Link href="/manager-form">매니저 지원</Link>
        </S.StyleWrapper>
      </S.BenefitContainer>

      <S.InstitutionContainer>
        <h2>교육기관 연계</h2>

        <div>
          <p>
            자격증이 없어도 걱정마세요!
            <br />
            교육기관과 연계하여 교육 커리큘럼을
            <br />
            제공하고 수료시 열다의 매니저로
            <br />
            활동할 수 있습니다!
          </p>

          <Image src="/img/managerApplyInstitution.png" alt="한국수납정리개발원 로고" width={94} height={94} />
        </div>
      </S.InstitutionContainer>
    </>
  );
}

export default ManagerApplyLayout;
