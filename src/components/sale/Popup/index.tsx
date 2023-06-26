import React from 'react';
import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';
import * as S from './style';
import { replaceStringsWithTags } from '@/utils';
interface PopupData {
  title?: string;
  subtitle: string;
  description: string;
  height?: string;
}

interface PopupProps {
  popupData: PopupData;
  isOpen: boolean;
  togglePopup: () => void;
  closeHeight: string;
}

const Popup: React.FC<PopupProps> = ({ popupData, isOpen, togglePopup, closeHeight }) => {
  return (
    <S.PopupContainer popup={isOpen} openHeight={popupData.height!} closeHeight={closeHeight}>
      <S.PopupWrap>
        <S.PopupContent>
          <S.PopupTitle>
            <p>{popupData.title}</p>
            <h2>{popupData.subtitle}</h2>
          </S.PopupTitle>
          <S.PopupDesc dangerouslySetInnerHTML={replaceStringsWithTags(popupData.description)} />
        </S.PopupContent>
        {isOpen ? (
          <FiArrowUpLeft style={{ fontSize: '30px', cursor: 'pointer' }} onClick={togglePopup} />
        ) : (
          <FiArrowDownRight style={{ fontSize: '30px', cursor: 'pointer' }} onClick={togglePopup} />
        )}
      </S.PopupWrap>
    </S.PopupContainer>
  );
};

export default Popup;
