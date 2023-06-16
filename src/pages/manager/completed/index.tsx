import React, { useState } from 'react';
import * as S from '../../../styles/Completed.styled';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
interface Location {
  mainAddress: string;
  address: string;
  detailAddress: string;
}

interface ServiceInfo {
  serviceDate: string;
  serviceDuration: string;
  servicePerPerson: number;
  location: Location;
}

interface DummyData {
  id: number;
  manager: string;
  serviceInfo: ServiceInfo;
}

const dummyData: DummyData = {
  id: 1,
  manager: '김민수',
  serviceInfo: {
    serviceDate: '2021-10-10',
    serviceDuration: '3',
    servicePerPerson: 2,
    location: {
      mainAddress: '서울특별시 동대문구',
      address: '무학로 26번길 30, 신동아아파트 301동',
      detailAddress: '1201호',
    },
  },
};

const convertKorean = (key: string): string => {
  switch (key) {
    case 'serviceDate':
      return '서비스 일시';
    case 'serviceDuration':
      return '신청 시간';
    case 'servicePerPerson':
      return '투입 인원';
    case 'location':
      return '위치';
    default:
      return '';
  }
};

const formatDate = (dateString: string): string => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ko-KR', options as Intl.DateTimeFormatOptions);
  const weekday = formattedDate.split(' ')[3];
  return formattedDate.replace(`(${weekday})`, `(${weekday}요일)`);
};

const Completed: React.FC = () => {
  const [showServiceInfo, setShowServiceInfo] = useState(false);

  const handleToggleServiceInfo = () => {
    setShowServiceInfo(!showServiceInfo);
  };

  // State for storing uploaded before and after images
  const [beforeImages, setBeforeImages] = useState<string[]>([]);
  const [afterImages, setAfterImages] = useState<string[]>([]);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    const files = event.target.files;
    if (files) {
      const uploadedImages: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            uploadedImages.push(reader.result as string);
            if (uploadedImages.length === files.length) {
              setImage(uploadedImages);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleBeforeImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageUpload(event, setBeforeImages);
  };

  const handleAfterImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageUpload(event, setAfterImages);
  };

  return (
    <S.Container>
      <section>
        <S.Title>
          <span>{dummyData.manager}</span>
          매니저님! <br /> 항상 저희 열다와 <br />
          함께 해주셔서 감사합니다!🙇
        </S.Title>
      </section>
      <section>
        <S.ServiceInfoDecs>
          방금 완료하신 서비스의
          <br /> 정리 전,후 사진을 올려주세요!
        </S.ServiceInfoDecs>
        <S.ServiceInfoWrap onClick={handleToggleServiceInfo}>
          {showServiceInfo ? <BsChevronUp /> : <BsChevronDown />}
          <p>이번 서비스 정보</p>
        </S.ServiceInfoWrap>
        {showServiceInfo && (
          <S.ServiceInfo>
            {Object.entries(dummyData.serviceInfo).map(([key, value], index) => {
              if (key === 'location') {
                return (
                  <S.ServiceInfoItem key={key} className={`span-${index === 1 || index === 2 ? 1 : 2}`}>
                    <span>{convertKorean(key)}</span>
                    <h3>{dummyData.serviceInfo.location.mainAddress}</h3>
                    <p>
                      {dummyData.serviceInfo.location.address}
                      <br /> {dummyData.serviceInfo.location.detailAddress}
                    </p>
                  </S.ServiceInfoItem>
                );
              } else {
                let formattedValue: string | number = value;
                if (key === 'serviceDate') {
                  formattedValue = formatDate(value);
                } else if (key === 'serviceDuration') {
                  formattedValue = `${value}시간`;
                } else if (key === 'servicePerPerson') {
                  formattedValue = `${value}인`;
                }
                return (
                  <S.ServiceInfoItem key={key} className={`span-${index === 1 || index === 2 ? 1 : 2}`}>
                    <span>{convertKorean(key)}</span>
                    <h3>{formattedValue}</h3>
                  </S.ServiceInfoItem>
                );
              }
            })}
          </S.ServiceInfo>
        )}
      </section>
      <section style={{ maxWidth: '320px' }}>
        <S.ServiceImgText>서비스 전 사진</S.ServiceImgText>
        {beforeImages.length > 0 && (
          <Swiper direction="horizontal" slidesPerView={1} spaceBetween={-20}>
            {beforeImages.map((image, index) => (
              <SwiperSlide key={index}>
                <S.SeviceImg img={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <input type="file" multiple accept="image/*" onChange={handleBeforeImageUpload} />
      </section>
      <section style={{ maxWidth: '320px' }}>
        <S.ServiceImgText>서비스 후 사진</S.ServiceImgText>
        {afterImages.length > 0 && (
          <Swiper direction="horizontal" slidesPerView={1} spaceBetween={-20}>
            {afterImages.map((image, index) => (
              <SwiperSlide key={index}>
                <S.SeviceImg img={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <input type="file" multiple accept="image/*" onChange={handleAfterImageUpload} />
      </section>
      <S.ButtonWrap>
        <S.Button color={'white'}>거절</S.Button>
        <S.Button color={'blue'}>수락</S.Button>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default Completed;
