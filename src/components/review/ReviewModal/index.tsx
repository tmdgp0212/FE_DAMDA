import SlideGallery from '../SlideGallery';
import CloseButton from '../../../../public/icons/close-icon.svg';
import BadgeBest from '../../../../public/icons/badge_best.svg';
import BadgeNew from '../../../../public/icons/badge_new.svg';
import * as S from './style';
import { ReviewRes } from '@/types/review';
import { nameMarker } from '@/utils/nameMarker';
import { dateFormatter } from '@/utils/date';
import React, { useState } from 'react';

interface ModalProps {
  review: ReviewRes;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReviewModal({ review, setIsModalOpen }: ModalProps) {
  const [filter, setFilter] = useState<'BEFORE' | 'AFTER'>('BEFORE');

  const modalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    setIsModalOpen(false);
  };

  return (
    <S.ModalBackground onClick={modalClose}>
      <S.Modal>
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
          {filter === 'BEFORE' ? (
            <SlideGallery images={review.imageBefore} />
          ) : (
            <SlideGallery images={review.imageAfter} />
          )}
        </S.Gallery>
        <S.ReviewDetail>
          <S.Badges>
            <BadgeBest />
            <BadgeNew />
          </S.Badges>
          <S.Title>{review.title}</S.Title>
          <S.Auth>
            <span>
              {review.location} {nameMarker(review.userName)}님
            </span>
            <span className="date">{dateFormatter(review.time)}</span>
          </S.Auth>
          <S.Body>{review.body}</S.Body>
        </S.ReviewDetail>
      </S.Modal>
    </S.ModalBackground>
  );
}

export default ReviewModal;
