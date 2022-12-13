import styled from 'styled-components';
import IconArrowLeft from '../../assets/icons/icon-arrow-left.svg';
import IconMoreVertical from '../../assets/icons/icon-more-vertical.svg';
import IconSearch from '../../assets/icons/icon-search.svg';

export const HeaderContainer = styled.header`
  height: 48px;
  position: sticky;
  top: 0;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${({ theme }) => theme.palette.white}; */
  background-color: palegoldenrod;
  margin-bottom: 10px;
`;

export const PreviousIcon = styled.img.attrs({
  src: IconArrowLeft,
  alt: '뒤로가기',
})`
  width: 22px;
  height: 22px;
`;

export const SettingIcon = styled.img.attrs({
  src: IconMoreVertical,
  alt: '더보기',
})`
  width: 24px;
  height: 24px;
`;

export const SearchIcon = styled.img.attrs({
  src: IconSearch,
  alt: '검색하기',
})`
  width: 24px;
  height: 24px;
`;

export const HeaderInput = styled.input.attrs({
  type: 'text',
  placeholder: '계정 검색',
})`
  width: 316px;
  height: 32px;
  line-height: 18px;
  padding: 7px 0 7px 16px;
  border-radius: 32px;
  border: none;
  background-color: ${({ theme }) => theme.palette.lightGray};
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const HeaderMainText = styled.p`
  height: 22px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export const HeaderChatText = styled.p`
  height: 22px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;
