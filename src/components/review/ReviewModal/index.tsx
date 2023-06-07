import SlideGallery from '../SlideGallery';
import CloseButton from '../../../../public/icons/close-icon.svg';
import BadgeBest from '../../../../public/icons/badge_best.svg';
import BadgeNew from '../../../../public/icons/badge_new.svg';
import * as S from './style';

function ReviewModal() {
  return (
    <S.ModalBackground>
      <S.Modal>
        <S.TopBar>
          <CloseButton />
        </S.TopBar>
        <S.Gallery>
          <S.TransitionButtons>
            <S.TransitionButton className="active">정리 전</S.TransitionButton>
            <S.TransitionButton>정리 후</S.TransitionButton>
          </S.TransitionButtons>
          <SlideGallery />
        </S.Gallery>
        <S.ReviewDetail>
          <S.Badges>
            <BadgeBest />
            <BadgeNew />
          </S.Badges>
          <S.Title>제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</S.Title>
          <S.Auth>
            <span>용산구 김**님</span>
            <span className="date">15일 전</span>
          </S.Auth>
          <S.Body>
            내용 내용 내용 내용내용 내용 내용 내용내용 내용 내용 내용내용 내용 내용 내용내용 내용 내용 내용내용 내용
            내용 내용내용 내용 내용 내용 내용이 너무 길어졌을 때애애 내용 내용 내용 내용내용 내용 내용 내용내용 내용
            내용 내용내용 내용 내용 내용내용 내용 내용 내용내용 내용 내용 내용내용 내용 내용 내용 내용이 너무 길어졌을
            때애애
          </S.Body>
        </S.ReviewDetail>
      </S.Modal>
    </S.ModalBackground>
  );
}

export default ReviewModal;
