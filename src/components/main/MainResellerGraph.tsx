import React from 'react';
import * as S from '@/styles/Main.styled';
import { mainGraphData } from '@/constants/mainGraph';

function MainResellerGraph() {
  return (
    <S.MainReSellerTable>
      {mainGraphData.map((mainGraphDatum) => (
        <S.MainReSellerTableContainer key={mainGraphDatum.graphValue}>
          <p className="paragraph">{mainGraphDatum.title}</p>
          <div className="graph">
            <S.MainReSellerTableGraph graphSize={mainGraphDatum.graphSize} />
            <p>{mainGraphDatum.graphValue}</p>
          </div>
        </S.MainReSellerTableContainer>
      ))}
    </S.MainReSellerTable>
  );
}

export default MainResellerGraph;
