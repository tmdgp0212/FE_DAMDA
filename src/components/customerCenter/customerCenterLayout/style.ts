import styled from '@emotion/styled';

export const CustomerCenterHeader = styled.header`
  position: relative;
  display: block;
  height: 412px;
`;

export const Description = styled.div`
  position: absolute;
  bottom: 67px;
  left: 20px;

  h2 {
    ${({ theme }) => theme.font.bold_30}
  }

  p {
    ${({ theme }) => theme.font.light_14}
  }
`;

export const PersonalConsultation = styled.div`
  padding: 48px 20px 52px;

  h2 {
    margin-bottom: 32px;
    ${({ theme }) => theme.font.bold_24_135}
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 237px;
    height: 55px;
    padding: 10px 10px 10px 16px;
    border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.main_blue};
    color: #ffffff;
    font-size: 19px;
    font-weight: 700;
    text-decoration: none;
  }
`;
