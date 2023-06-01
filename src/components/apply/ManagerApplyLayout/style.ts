import styled from '@emotion/styled';

export const FamilyContainer = styled.section`
  position: relative;
  display: block;
  height: 512px;
`;

export const Description = styled.div`
  position: absolute;
  bottom: 28px;
  left: 20px;
  width: 320px;
  height: 215px;

  h2 {
    margin-bottom: 9px;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }

  p {
    margin-bottom: 27px;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    height: 55px;
    padding: 10px 10px 10px 16px;
    border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.main_blue};
    color: #ffffff;
    font-size: 19px;
    font-weight: 700;
    text-decoration: none;

    & svg {
      font-size: 24px;
    }
  }
`;

export const PreferenceContainer = styled.section`
  height: 362px;
  padding: 80px 17px;
  text-align: right;

  h2 {
    margin-bottom: 6px;
    font-size: 24px;
    font-weight: 700;
    line-height: 135%;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 160%;
  }
`;

export const BenefitContainer = styled.section`
  position: relative;
  display: block;
  height: 792px; // TODO:

  img {
    display: block;
    width: 100%;
  }
`;

export const Title = styled.header`
  padding-left: 22px;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 6px;
    font-size: 24px;
    font-weight: 700;
    line-height: 160%;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 160%;
  }
`;

export const InstitutionContainer = styled.section`
  padding: 80px 24px 80px 20px;
  margin-bottom: 65px;

  h2 {
    margin-bottom: 17px;
    font-size: 24px;
    font-weight: 700;
    line-height: 160%;
    text-align: right;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  p {
    margin-right: 17px;
    font-size: 14px;
    line-height: 160%;
    text-align: right;
  }
`;
