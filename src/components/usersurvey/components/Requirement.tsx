import React, { useEffect, useState } from 'react';
import { UserSurveyRequirementWrapper } from '@/styles/survey.styled';
import { requirement } from '@/constants/requirement';
import { replaceStringsWithTags } from '@/utils';
import { requirementType } from '@/types/api/formTypes';
import { UserSurveyFormRequirementProps } from '@/types/components/form';

function Requirement({ handleAgree }: UserSurveyFormRequirementProps) {
  const [required, setRequired] = useState<requirementType[]>([]);

  // hydrate 방지
  useEffect(() => {
    setRequired(requirement);
  }, []);

  const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleAgree(e.target.checked);
  };

  return (
    <UserSurveyRequirementWrapper>
      <h2>필수 안내 사항을 읽어 주세요!</h2>
      <div className="require-list">
        {required.map((item) => (
          <div className="item" key={item.id}>
            <span className="requirement-number">{item.id}. </span>
            <span dangerouslySetInnerHTML={replaceStringsWithTags(item.title)} />
            <br />
            {item.list && (
              <ul>
                {item.list.map((listItem) => (
                  <li key={listItem}>{listItem}</li>
                ))}
              </ul>
            )}
            {item.additional && <span className="additional"> {item.additional}</span>}
          </div>
        ))}
      </div>
      <div className="checkbox-wrapper">
        <input type="checkbox" id="requirement" onChange={handleOnClick} />
        <label htmlFor="requirement">네, 동의합니다!</label>
      </div>
    </UserSurveyRequirementWrapper>
  );
}

export default Requirement;
