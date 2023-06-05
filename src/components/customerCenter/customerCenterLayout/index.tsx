import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FrequentlyAskedQuestions from '@/components/common/FAQ/FrequentlyAskedQuestions';
import Category from '../Category';
import { customerCenterFAQs } from '@/constants/customerCenterFAQs';
import customerCenterImg from 'public/img/customerServiceCenter.png';

import * as S from './style';

const allCategories = ['전체', ...new Set(customerCenterFAQs.map((faq) => faq.category || ''))];

function CustomerCenterLayout() {
  const [data, setData] = useState(customerCenterFAQs);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState('전체');

  const filterFAQHandler = (category: string) => {
    if (category === '전체') return setData(customerCenterFAQs);
    const newData = customerCenterFAQs.filter((faq) => faq.category === category);
    setData(newData);
  };

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
        <S.Title>자주 묻는 질문</S.Title>

        <Category
          categories={categories}
          filterFAQHandler={filterFAQHandler}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <FrequentlyAskedQuestions enteredFAQs={data} />

        <S.PersonalConsultation>
          <h2>
            찾으시는
            <br /> 내용이 없으신가요?
          </h2>

          <Link href="https://accounts.kakao.com/login/?continue=http%3A%2F%2Fpf.kakao.com%2F_ksPxixj%2Fchat%3Fapi_ver%3D1.1%26kakao_agent%3Dsdk%252F1.43.1%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fyolda.kr%26app_key%3D6840dd88707cb50fd39088f3624bd147%26referer%3Dhttps%253A%252F%252Fyolda.kr%252F#login">
            1:1 상담 신청
          </Link>
        </S.PersonalConsultation>
      </S.CustomerCenterContent>
    </div>
  );
}

export default CustomerCenterLayout;
