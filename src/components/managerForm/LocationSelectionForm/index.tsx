import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { citiesData } from '@/constants/locationData';
import useManagerFormStore from '@/store/managerForm';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import * as G from '../style';
import * as S from './style';

function LocationSelectionForm({ setIsLocationValid }: any) {
  const { activity_region, setActivityCity, setActivityDistrict, removeActivityDistrict } = useManagerFormStore(
    (state) => state,
  );
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');

  if (activity_region.activity_district.length !== 0) {
    setIsLocationValid(true);
  } else {
    setIsLocationValid(false);
  }

  const regionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRegion(e.target.value);
  };

  const cityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const district = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setActivityCity(selectedRegion);
      setActivityDistrict(district);
    } else {
      removeActivityDistrict(district);
    }
  };

  const tags = activity_region.activity_city.map((cityItem: string, index: number) => {
    const districtItem = activity_region.activity_district[index];

    return (
      <div key={index}>
        {`${cityItem.slice(0, 2)} ${districtItem}`}

        <button type="button" onClick={() => filterTagHandler(districtItem)}>
          <Image src="/icons/tag-close-icon.svg" alt="tag-close-icon" width={10.5} height={10.5} />
        </button>
      </div>
    );
  });

  const filterTagHandler = (districtItem: string) => {
    removeActivityDistrict(districtItem);
  };

  return (
    <S.LocationSelectionForm>
      <G.SubTitle>어디서 활동 가능 하신가요?</G.SubTitle>
      <p>활동이 가능하신 모든 지역을 등록해주세요.</p>

      {/* 지역 태그 */}
      <S.SelectedLocation>{tags}</S.SelectedLocation>

      <div style={{ position: 'relative' }}>
        {/* Select Button */}
        <S.SelectButton
          type="button"
          region={selectedRegion}
          isOptionsOpen={isOptionsOpen}
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <div className="select-region">
            지역 선택
            {isOptionsOpen ? <BsChevronUp /> : <BsChevronDown />}
          </div>

          <div className="select-detail">
            <span>{selectedRegion === 'seoul' ? '서울특별시' : '경기도'}</span>

            <span>
              세부 선택
              <BsChevronUp />
            </span>
          </div>
        </S.SelectButton>

        {/* Options */}
        {isOptionsOpen && (
          <S.ListWrapper>
            <ul>
              <li>
                <input
                  type="radio"
                  name="manager_available_region"
                  id="seoul"
                  value="서울특별시"
                  onChange={regionChangeHandler}
                />
                <label htmlFor="seoul">서울특별시</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="manager_available_region"
                  id="gyeonggi"
                  value="경기도"
                  onChange={regionChangeHandler}
                />
                <label htmlFor="gyeonggi">경기도</label>
              </li>
            </ul>

            {selectedRegion && (
              <ul>
                {citiesData[selectedRegion].map((district: string) => (
                  <li key={district}>
                    <input
                      type="checkbox"
                      name="manager_available_district"
                      id={district}
                      value={district}
                      checked={activity_region.activity_district.includes(district)}
                      onChange={cityChangeHandler}
                    />
                    <label htmlFor={district}>{district}</label>
                  </li>
                ))}
              </ul>
            )}
          </S.ListWrapper>
        )}
      </div>
    </S.LocationSelectionForm>
  );
}

export default LocationSelectionForm;
