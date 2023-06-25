import Logo from '../../images/Logo.png';
import pictureMain from '../../images/pictureMain.png';
import PropTypes from 'prop-types';
import {
  BtnFollow,
  ContainerCard,
  Image,
  InfoList,
  LineUser,
  RoundUser,
  TextInfo,
  WrapImg,
} from './CardUser.styled';
import { useState } from 'react';
import { fetchUpdateUser } from 'api/fetchUser';
export const CardUser = ({ userItem, id }) => {
  const [isFollow, setIsFollow] = useState(
    JSON.parse(localStorage.getItem(`userFollowing${id}`)) ?? false
  );
  const handleBtnFollow = e => {
    setIsFollow(!isFollow);
    if (!isFollow) {
      userItem.followers = String(Number(userItem.followers) + 1);
      localStorage.setItem(`userFollowing${id}`, JSON.stringify(!isFollow));
    } else {
      userItem.followers = String(Number(userItem.followers) - 1);
      localStorage.removeItem(`userFollowing${id}`);
    }
    fetchUpdateUser(e.target.id, userItem);
  };
  return (
    <ContainerCard>
      <WrapImg>
        <Image src={Logo} alt="LogoImages" width={76} height={22} />
        <img src={pictureMain} alt="LogoImages" width={308} height={168} />
        <LineUser>
          <RoundUser image={userItem.avatar}></RoundUser>
        </LineUser>
      </WrapImg>
      <InfoList>
        <li>
          <TextInfo>{userItem.tweets} tweets</TextInfo>
        </li>
        <li>
          <TextInfo>
            {Number(userItem.followers).toLocaleString('en-US')} Followers
          </TextInfo>
        </li>
      </InfoList>
      <BtnFollow
        type="button"
        onClick={handleBtnFollow}
        active={!isFollow}
        id={id}
      >
        {!isFollow ? 'Follow' : 'Following'}
      </BtnFollow>
    </ContainerCard>
  );
};

CardUser.propTypes = {
  userItem: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};
