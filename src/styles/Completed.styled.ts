import styled from '@emotion/styled';
import { BsPlus } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding: ${({ theme }) => theme.padding.mobile};
`;

export const Title = styled.h1`
  span {
    font-size: 24px;
    font-weight: 900;
  }
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #181818;
  padding-top: 30px;
`;

export const ServiceInfoDecs = styled.div`
  ${({ theme }) => theme.font.bold_16}
`;

export const ServiceInfoWrap = styled.button`
  display: flex;
  padding: 20px;
  gap: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ServiceInfo = styled.div`
  display: grid;
`;

export const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ServiceInfoItem = styled.div`
  display: grid;
  gap: 8px;
  border: 1px solid #181818;
  border-radius: 8px;
  padding: 10px 16px;
`;

export const ServiceInfoText = styled.p`
  ${({ theme }) => theme.font.bold_19}
`;

// 전 후 사진
export const ServiceImgForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ServiceImgText = styled.p`
  ${({ theme }) => theme.font.bold_14}
  margin-bottom: 16px;
`;

export const SeviceImg = styled.div<{ img: string }>`
  width: 28rem;
  height: 25rem;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const InputLabel = styled.label`
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #181818;
  border-radius: 8px;
  padding: 0 1.2rem;
  margin-bottom: 16px;
`;

export const PlusButton = styled(BsPlus)`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.main_blue};
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 8rem 0 2rem 0;
`;

export const Button = styled.button<{ color: string }>`
  cursor: pointer;
  width: 100%;
  height: 48px;
  background-color: ${({ theme, color }) => (color === 'white' ? '#fff' : theme.colors.main_blue)};
  ${({ theme }) => theme.font.bold_16}
  color: ${({ theme, color }) => (color === 'white' ? '#181818' : '#fff')};
  border: 1px solid black;
  text-align: left;
  border-radius: 8px;
  padding-left: 16px;
`;
