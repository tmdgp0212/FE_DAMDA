import styled from '@emotion/styled';

export const Procedure = styled.div`
  width: 320px;
  height: 45rem;
  border: 1px solid black;
  border-radius: 0.6rem;
  padding: 0 2rem;
`;

export const ProcedureTitle = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 0.6rem;
  line-height: 3.7rem;
  padding-left: 1.2rem;
  margin-top: -2rem;
`;

export const ProcedureImg = styled.div<{ img: string }>`
  width: 100%;
  height: 21rem;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 0.6rem;
`;

export const ProcedureDesc = styled.div`
  display: flex;
  align-items: self-start;
  width: 100%;
  margin: 1.4rem 0;
`;
