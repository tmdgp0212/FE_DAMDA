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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1.6fr;

  .span-1 {
    grid-column: span 1;
  }

  .span-2 {
    grid-column: span 2;
  }
`;

export const ServiceInfoItem = styled.div`
  padding: 10px 16px;
  ${({ theme }) => theme.border.inputBorder};

  display: flex;
  flex-direction: column;
  gap: 2px;

  h3 {
    font-weight: 800;
    font-size: 18px;
    line-height: 135%;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  p {
    ${({ theme }) => theme.font.bold_14}
  }
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
`;

export const PlusButton = styled(BsPlus)`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.main_blue};
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button<{ color: string }>`
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
