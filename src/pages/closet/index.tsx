import React, { useState } from 'react';
import * as S from '../../styles/Closet.styled';
import ProcedureCarousel from '@/components/sale/Swiper';
import {
  ClosetProData,
  StatisticsDatas,
  closetEsimateData,
  closetExpertInfo,
  closetProcedureData,
} from '@/constants/closetData';
import { replaceStringsWithTags } from '@/utils';
import Popup from '@/components/sale/Popup';
import BestReview from '@/components/review/BestReview';
import Image from 'next/image';
import 'swiper/css/bundle';
import { SwiperSlide } from 'swiper/react';

const dummyBest = {
  id: 4,
  title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
  content: '열다 서비스를 받고 옷입는 시간이 줄었어요 너무 좋아요 어쩌구',
  name: '박아무개',
  bestReview: true,
  address: '강남구',
  date: '2023-03-19',
  before: ['https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg'],
  after: ['https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg'],
};

function ClosetPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeEstimateTab, setActiveEstimateTab] = useState(0);

  const handleTabClick = (index: number, isEstimateTab: boolean = false) => {
    if (isEstimateTab) {
      setActiveEstimateTab(index);
    } else {
      setActiveTab(index);
    }
  };

  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);

  const togglePopup = (index: number) => {
    setOpenPopupIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { img, content } = ClosetProData[activeTab];

  return (
    <S.ClosetContainer>
      <S.ClosetTitleContainer>
        <S.ClosetTitleImg backgorundImg={'/img/Closet_main.png'} />
        <S.ImgCover>
          <h1>옷장 정리</h1>
          <p>
            귀찮은 옷장 정리,
            <br />
            클릭 한 번으로 마무리하세요!
          </p>
        </S.ImgCover>
      </S.ClosetTitleContainer>
      <S.ClosetCleanContainer>
        <h1>옷장 정리는 이렇게 진행돼요</h1>
        <ProcedureCarousel procedureData={closetProcedureData} />
      </S.ClosetCleanContainer>
      <S.ClosetProContainer>
        <h1>옷장 정리, 뭐가 좋은가요?</h1>
        <S.ButtonWrap>
          <S.TabButton active={activeTab === 0} width={40} onClick={() => handleTabClick(0)}>
            수익창출
          </S.TabButton>
          <S.TabButton active={activeTab === 1} width={56.5} onClick={() => handleTabClick(1)}>
            여유로운 아침
          </S.TabButton>
          <S.TabButton active={activeTab === 2} width={56.5} onClick={() => handleTabClick(2)}>
            환경보호
          </S.TabButton>
          <S.TabButton active={activeTab === 3} width={40} onClick={() => handleTabClick(3)}>
            의류 관리
          </S.TabButton>
        </S.ButtonWrap>
        <S.TabContent>
          <S.TabContentImg backgorundImg={img} />
          <S.TabContentText dangerouslySetInnerHTML={replaceStringsWithTags(content)} />
        </S.TabContent>
      </S.ClosetProContainer>
      <S.ClosetExpertContainer>
        <h1>정리수납 전문가가 궁금해요!</h1>
        {closetExpertInfo.map((popup, index) => (
          <Popup
            key={index}
            popupData={popup}
            isOpen={openPopupIndex === index}
            togglePopup={() => togglePopup(index)}
            closeHeight={'50px'}
          />
        ))}
      </S.ClosetExpertContainer>
      <S.ClosetEstimateContainer>
        <h1 dangerouslySetInnerHTML={replaceStringsWithTags('우리 집은br견적이 얼마정도 나올까요?')} />
        <p
          dangerouslySetInnerHTML={replaceStringsWithTags(
            '여러분과 비슷한 환경에서 서비스 받으신 분들을 통해br미리 예상되는 금액을 확인해보세요!',
          )}
        />
        <S.EstimateButtonWrap>
          <S.TabButton active={activeEstimateTab === 0} width={33} onClick={() => handleTabClick(0, true)}>
            1인 가구
          </S.TabButton>
          <S.TabButton active={activeEstimateTab === 1} width={33} onClick={() => handleTabClick(1, true)}>
            2인 가구
          </S.TabButton>
          <S.TabButton active={activeEstimateTab === 2} width={33} onClick={() => handleTabClick(2, true)}>
            3인 가구
          </S.TabButton>
        </S.EstimateButtonWrap>
        <S.EstimateContent>
          <S.EstimatePayWrap></S.EstimatePayWrap>
          <S.EstimateImg backgorundImg={closetEsimateData[0].img} />
          <S.EstimatePay focus={true}>
            1인 가구 실제
            <h2>60,000원</h2>
          </S.EstimatePay>
          <p>{closetEsimateData[0].userName.replace(/(?<=.{1})./gi, '*')}님의 후기</p>
        </S.EstimateContent>
      </S.ClosetEstimateContainer>
      <S.ClosetReviewContainer>
        <h1 dangerouslySetInnerHTML={replaceStringsWithTags('먼저 열다를 경험한 분들의br이야기를 들어보세요!')} />
        <BestReview bestReview={dummyBest} />
      </S.ClosetReviewContainer>
      <S.ClosetStatisticsContainer direction="horizontal" slidesPerView={1} spaceBetween={10}>
        {StatisticsDatas.map((data) => (
          <SwiperSlide key={data.key}>
            <S.StatisticsItem>
              <S.StatisticsDecs>
                <h1>⌛</h1>
                <p dangerouslySetInnerHTML={replaceStringsWithTags(data.content)} />
              </S.StatisticsDecs>
              <S.StatisticsIcon style={{ justifyContent: 'center' }}>
                <Image src={data.icon} width={60} height={60} alt="icons" />
                <S.StatisticsTitle>{data.title}</S.StatisticsTitle>
              </S.StatisticsIcon>
            </S.StatisticsItem>
          </SwiperSlide>
        ))}
      </S.ClosetStatisticsContainer>
    </S.ClosetContainer>
  );
}

export default ClosetPage;
