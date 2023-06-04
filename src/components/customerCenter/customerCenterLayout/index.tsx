import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FrequentlyAskedQuestions from '@/components/common/FAQ/FrequentlyAskedQuestions';
import { customerCenterFAQs } from '@/constants/customerCenterFAQs';
import customerCenterImg from 'public/img/customerServiceCenter.png';

import * as S from './style';

function CustomerCenterLayout() {
  return (
    <div>
      <S.CustomerCenterHeader>
        <Image src={customerCenterImg} alt="고객센터 페이지 이미지" fill />

        <S.Description>
          <h2>고객센터</h2>
          <p>열다에 대한 궁금증을 해소하세요!</p>
        </S.Description>
      </S.CustomerCenterHeader>

      <S.CustomerCenterContent>
        <FrequentlyAskedQuestions enteredFAQs={customerCenterFAQs} />

        <S.PersonalConsultation>
          <h2>
            찾으시는
            <br /> 내용이 없으신가요?
          </h2>

          <Link href="/">1:1 상담 신청</Link>
        </S.PersonalConsultation>
      </S.CustomerCenterContent>
    </div>
  );
}

export default CustomerCenterLayout;
