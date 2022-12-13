import * as S from './style';
// import { SmallButton } from '../index';

function TopBasicNav() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.SettingIcon />
    </S.HeaderContainer>
  );
}

function TopSearchNav() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.HeaderInput />
    </S.HeaderContainer>
  );
}

function TopMainNav() {
  return (
    <S.HeaderContainer>
      <S.HeaderMainText />
      <S.SearchIcon />
    </S.HeaderContainer>
  );
}

function TopUploadNav() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      {/* <SmallButton('업로드', _)> */}
    </S.HeaderContainer>
  );
}

function TopFollowNav() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      {/* 저장 btn 추가 */}
    </S.HeaderContainer>
  );
}

function TopChatNav() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.HeaderChatText />
      <S.SettingIcon />
    </S.HeaderContainer>
  );
}

export { TopBasicNav, TopSearchNav, TopMainNav, TopUploadNav, TopFollowNav, TopChatNav };
