import SlideGallery from '../SlideGallery';
import CloseButton from '../../../../public/icons/close-icon.svg';
import BadgeBest from '../../../../public/icons/badge_best.svg';
import BadgeNew from '../../../../public/icons/badge_new.svg';
import ModalContainer from '@/components/common/ModalContainer';
import * as S from './style';
import { ReviewData, ReviewRes } from '@/types/review';
import { nameMarker } from '@/utils/nameMarker';
import { dateFormatter } from '@/utils/date';
import React, { useState } from 'react';

interface ModalProps {
  review: ReviewData;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReviewModal({ review, setIsModalOpen }: ModalProps) {
  const [filter, setFilter] = useState<'BEFORE' | 'AFTER'>('BEFORE');

  return (
    <ModalContainer setIsModalOpen={setIsModalOpen}>
      <S.TopBar>
        <CloseButton onClick={() => setIsModalOpen(false)} />
      </S.TopBar>
      <S.Gallery>
        <S.TransitionButtons>
          <S.TransitionButton
            className={filter === 'BEFORE' ? 'active' : ''}
            onClick={() => {
              setFilter('BEFORE');
            }}
          >
            정리 전
          </S.TransitionButton>
          <S.TransitionButton
            className={filter === 'AFTER' ? 'active' : ''}
            onClick={() => {
              setFilter('AFTER');
            }}
          >
            정리 후
          </S.TransitionButton>
        </S.TransitionButtons>
        {filter === 'BEFORE' ? <SlideGallery images={review.before} /> : <SlideGallery images={review.after} />}
      </S.Gallery>
      <S.ReviewDetail>
        <S.Badges>
          <BadgeBest />
          <BadgeNew />
        </S.Badges>
        <S.Title>{review.title}</S.Title>
        <S.Auth>
          <span>
            {review.address} {nameMarker(review.name)}님
          </span>
          <span className="date">{dateFormatter(review.date)}</span>
        </S.Auth>
        <S.Body>{review.content}</S.Body>
      </S.ReviewDetail>
    </ModalContainer>
  );
}

export default ReviewModal;
