import React, { useState, useEffect } from 'react';
import * as S from '../../../styles/Completed.styled';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRouter } from 'next/router';
import { getService, postImg } from '@/apis/completed';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { ReservationData } from '@/types/completed';
import Image from 'next/image';
import { toast } from 'react-toastify';

export interface ImagesType {
  before: string[];
  after: string[];
}

export type BeforeAfter = 'before' | 'after';

const formatDate = (dateString: string): string => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ko-KR', options as Intl.DateTimeFormatOptions);
  const weekday = formattedDate.split(' ')[3];
  return formattedDate.replace(`(${weekday})`, `(${weekday}요일)`);
};

// Component
const Completed: React.FC = () => {
  const [showServiceInfo, setShowServiceInfo] = useState(false);
  const handleToggleServiceInfo = () => {
    setShowServiceInfo(!showServiceInfo);
  };

  const [beforeFormData, setBeforeFormData] = useState<File[]>([]); // 사용자가 추가한 이미지 (데이터전송용)
  const [afterFormData, setAfterFormData] = useState<File[]>([]); // 사용자가 추가한 이미지 (데이터전송용)

  const [beforeImages, setBeforeImages] = useState<string[]>([]);
  const [afterImages, setAfterImages] = useState<string[]>([]);

  // API 데이터 가져오기
  const router = useRouter();
  const serviceId = router.query.id;
  const { data, isLoading } = useQuery(
    ['service', serviceId],
    () => getService(serviceId as string).then((res) => res.data),
    {
      onError: () => {
        toast.error('서비스 정보를 가져오는데 실패했습니다.');
        router.push('/');
      },
    },
  );

  const managerName = data?.managerNames?.join(', ') || '';
  const serviceAddress = data?.serviceAddress || '';
  const words = serviceAddress.split(' ');
  const mainAddress = words.slice(0, 2).join(' ');
  const subAddress = words.slice(2).join(' ');

  const mutation = useMutation((formData: FormData) => postImg(serviceId as string, formData), {
    onSuccess: () => {
      router.push('/manager/completed/success');
      toast.success('이미지 업로드에 성공했습니다.');
    },
    onError: () => {
      toast.error('이미지 업로드에 실패했습니다.');
    },
  });

  if (isLoading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
        <Image src="/icons/loading.gif" alt="loading" width="200" height="100" />
      </div>
    );

  const handleImagePreview = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string[]>>,
    setFormData: React.Dispatch<React.SetStateAction<File[]>>,
  ) => {
    const files = event.target.files;
    if (files) {
      const uploadedImages: string[] = [];
      const uploadedFiles: File[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            uploadedImages.push(reader.result as string);
            uploadedFiles.push(file);
            if (uploadedImages.length === files.length) {
              setImage(uploadedImages);
              setFormData(uploadedFiles);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleBeforeImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImagePreview(event, setBeforeImages, setBeforeFormData);
  };

  const handleAfterImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImagePreview(event, setAfterImages, setAfterFormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData();

    if (beforeFormData.length > 0) {
      beforeFormData.forEach((before) => formData.append('before', before));
    }
    if (afterFormData.length > 0) {
      afterFormData.forEach((after) => formData.append('after', after));
    }
    console.log(formData);
    try {
      await mutation.mutateAsync(formData);
    } catch (error) {
      // 이미지 전송 중 오류 처리
    }
  };

  // 취소
  const handleCancel = () => {
    router.push('/');
  };

  return (
    <S.Container>
      <section>
        <S.Title>
          <span>{managerName}</span>
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
            <S.ServiceInfoItem>
              <span>서비스 일지</span>
              <S.ServiceInfoText>{formatDate(data.serviceDate)}</S.ServiceInfoText>
            </S.ServiceInfoItem>
            <S.ItemWrap>
              <S.ServiceInfoItem>
                <span>신청 시간</span>
                <S.ServiceInfoText>{data.serviceUsageTime}</S.ServiceInfoText>
              </S.ServiceInfoItem>
              <S.ServiceInfoItem>
                <span>투입인원</span>
                <S.ServiceInfoText>{data.managerCount}인</S.ServiceInfoText>
              </S.ServiceInfoItem>
            </S.ItemWrap>
            <S.ServiceInfoItem>
              <span>위치</span>
              <S.ServiceInfoText>
                {mainAddress}
                <br />
                {subAddress}
              </S.ServiceInfoText>
            </S.ServiceInfoItem>
          </S.ServiceInfo>
        )}
      </section>
      <S.ServiceImgForm onSubmit={handleSubmit}>
        <section>
          <div style={{ maxWidth: '320px' }}>
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
            <S.InputLabel htmlFor="upload-before">
              <span>사진 추가하기</span>
              <S.PlusButton />
            </S.InputLabel>
            <input
              id="upload-before"
              type="file"
              multiple
              accept="image/*"
              onChange={handleBeforeImageUpload}
              style={{ display: 'none' }}
            />
          </div>
          <div style={{ maxWidth: '320px' }}>
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
            <S.InputLabel htmlFor="upload-after">
              <span>사진 추가하기</span>
              <S.PlusButton />
            </S.InputLabel>
            <input
              id="upload-after"
              type="file"
              multiple
              accept="image/*"
              onChange={handleAfterImageUpload}
              style={{ display: 'none' }}
            />
          </div>
        </section>
        <S.ButtonWrap>
          <S.Button color={'white'} onClick={handleCancel}>
            취소
          </S.Button>
          <S.Button color={'blue'} type="submit">
            완료
          </S.Button>
        </S.ButtonWrap>
      </S.ServiceImgForm>
    </S.Container>
  );
};

export default Completed;
