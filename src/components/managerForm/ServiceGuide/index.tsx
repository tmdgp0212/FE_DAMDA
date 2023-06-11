import React from 'react';

import * as G from '../style';
import * as S from './style';

function ServiceGuide() {
  return (
    <S.ServiceGuide>
      <G.Headline>
        열다의 옷장 정리 가이드에 따라
        <br />
        서비스 제공이 가능한가요?
      </G.Headline>

      <div>
        <S.GuideDetail>
          <p className="description">
            열다의 매니저분들은 열다가 자체 개발한
            <br /> 옷장 정리 가이드에 따라 서비스를 제공하며,
            <br /> 아래 두 가지가 가능해야 합니다.
          </p>

          <p>
            <strong>1. 서비스 1건당 평균 작업 소요시간은 4시간입니다.</strong>

            <strong>2. 매니저님 혼자 서비스를 제공하실 수도 있습니다.</strong>
          </p>
        </S.GuideDetail>

        <S.InputCheckbox>
          <input type="checkbox" id="agreement" />
          <label htmlFor="agreement">네, 가능합니다!</label>
        </S.InputCheckbox>
      </div>
    </S.ServiceGuide>
  );
}

export default ServiceGuide;
