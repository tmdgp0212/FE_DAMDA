import * as S from './style';

function Header() {
  return (
    <S.Header>
      <S.Logo className="ir-text">열다</S.Logo>
      <S.HeaderButtons>
        <S.EstimateButton>무료견적</S.EstimateButton>
        <S.LoginButton className="ir-text">login</S.LoginButton>
        <S.SideMenuButton className="ir-text">menu</S.SideMenuButton>
      </S.HeaderButtons>
    </S.Header>
  );
}

export default Header;
