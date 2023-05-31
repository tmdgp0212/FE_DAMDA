import React from 'react';
import * as S from '@/styles/Main.styled';
import { mainGraphData } from '@/constants/mainGraph';
import { BsArrowUpRight } from 'react-icons/bs';

function MainResellerGraph() {
  return (
    <S.MainReSellerContent>
      <h1>
        판매액이 높을수록 <br /> 수수료가 낮아집니다.
        <BsArrowUpRight />
      </h1>
      <p>판매 금액대별 대행 수수료</p>
      <S.MainReSellerTable>
        {mainGraphData.map((mainGraphDatum) => (
          <S.MainReSellerTableContainer key={mainGraphDatum.graphValue}>
            <p className="paragraph">{mainGraphDatum.title}</p>
            <div className="graph">
              <S.MainReSellerTableGraph graphsize={mainGraphDatum.graphSize} />
              <p>{mainGraphDatum.graphValue}</p>
            </div>
          </S.MainReSellerTableContainer>
        ))}
      </S.MainReSellerTable>
    </S.MainReSellerContent>
  );
}

export default MainResellerGraph;
