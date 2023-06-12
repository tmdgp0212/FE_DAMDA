import React, { useEffect, useState } from 'react';
import { UserSurveyFormAddressProps } from '@/types/components/form';
import {
  UserSurveyAddressSelectWrapper,
  UserSurveyFormAddressWrapper,
  UserSurveyFormInputWrapper,
  UserSurveyFormSubAddressWrapper,
} from '@/styles/survey.styled';
import { AiOutlineDown } from 'react-icons/ai';
import { addressList } from '@/constants/location';
import { Variants, motion } from 'framer-motion';

const variants: Variants = {
  whileHover: {
    border: '2px solid #00BDFF',
  },
};

const makeFullAddress = (mainAddress?: string, subAddress?: string, detailAddress?: string) => {
  return `${mainAddress} ${subAddress ? subAddress : ''} ${detailAddress ? detailAddress : ''}`;
};

function AddressSelect({ title, handleUpdateFormValue, questionNumber, placeholder }: UserSurveyFormAddressProps) {
  const [mainAddress, setMainAddress] = useState<string>('');
  const [subAddress, setSubAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [isMainAddressOpen, setIsMainAddressOpen] = useState(false);
  const [isSubAddressOpen, setIsSubAddressOpen] = useState(false);

  const handleAddressOpen = () => {
    setIsMainAddressOpen((prev) => !prev);
  };

  const handleMainAddressSelect = (address: string) => {
    setMainAddress(address);
    setIsSubAddressOpen(true);
  };

  const handleSubAddressSelect = (address: string) => {
    setSubAddress(address);
    setIsMainAddressOpen(false);
  };

  const handleDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  useEffect(() => {
    const currentData = {
      questionNumber,
      answer: makeFullAddress(mainAddress, subAddress, detailAddress),
      questionIdentifier: placeholder,
    };

    handleUpdateFormValue((prev) => {
      const isExist = prev.find((data) => data.questionNumber === questionNumber);
      if (isExist) {
        return prev.map((data) => (data.questionNumber === questionNumber ? currentData : data));
      } else {
        return [...prev, currentData];
      }
    });
  }, [mainAddress, subAddress, detailAddress]);

  return (
    <UserSurveyAddressSelectWrapper>
      <span className="title">{title}</span>
      {mainAddress && <h1>{makeFullAddress(mainAddress, subAddress)}</h1>}
      {mainAddress && subAddress && (
        <UserSurveyFormInputWrapper>
          {detailAddress === '' ? <span>상세 주소를 입력해주세요</span> : <h1>{detailAddress}</h1>}
          <div className="input">
            <p>상세 주소</p>
            <input type="text" placeholder="동, 호수까지 입력해주세요" onChange={handleDetailAddress} />
          </div>
        </UserSurveyFormInputWrapper>
      )}
      <div className="address" onClick={handleAddressOpen}>
        <span>{mainAddress === '' ? '지역 선택' : subAddress === '' ? mainAddress : '지역 다시 선택'}</span>
        <AiOutlineDown />
      </div>
      {isMainAddressOpen && (
        <UserSurveyFormAddressWrapper isSubAddressOpen={isSubAddressOpen}>
          <div className="address-list">
            {isSubAddressOpen ? (
              <UserSurveyFormSubAddressWrapper>
                <div className="main">
                  {Object.keys(addressList).map((data, index) => (
                    <motion.span
                      className="address-item"
                      key={index}
                      variants={variants}
                      whileHover="whileHover"
                      animate={mainAddress === data ? 'whileHover' : ''}
                      onClick={() => handleMainAddressSelect(data)}
                    >
                      {data}
                    </motion.span>
                  ))}
                </div>
                <div className="sub">
                  {addressList[mainAddress].map((data, index) =>
                    index === addressList[mainAddress].length - 1 ? (
                      <span className="add" key={index}>
                        {data}
                      </span>
                    ) : (
                      <motion.span
                        className="address-item"
                        key={index}
                        variants={variants}
                        whileHover="whileHover"
                        animate={subAddress === data ? 'whileHover' : ''}
                        onClick={() => handleSubAddressSelect(data)}
                      >
                        {data}
                      </motion.span>
                    ),
                  )}
                </div>
              </UserSurveyFormSubAddressWrapper>
            ) : (
              Object.keys(addressList).map((data, index) => (
                <motion.span
                  className="address-item"
                  key={index}
                  variants={variants}
                  whileHover="whileHover"
                  onClick={() => handleMainAddressSelect(data)}
                >
                  {data}
                </motion.span>
              ))
            )}
          </div>
        </UserSurveyFormAddressWrapper>
      )}
    </UserSurveyAddressSelectWrapper>
  );
}

export default AddressSelect;
