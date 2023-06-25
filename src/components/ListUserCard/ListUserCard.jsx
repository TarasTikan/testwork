import { CardUser } from 'components/CardUser/CardUser';
import { ListUsers, SectionUsers } from './ListUserCard.styled';
import { BtnLoadMore } from 'components/BtnLoadMore/BtnLoadMore';
import { nanoid } from 'nanoid';
import { Loader } from 'components/Loader/Loader';
import { BtnBack } from 'components/BtnBack/BtnBack';
import PropTypes from 'prop-types';
export const ListUserCard = ({ loadBtn, users, visibleBtn, isLoading }) => {
  return (
    <SectionUsers>
      <BtnBack />
      <ListUsers>
        {users.map(user => (
          <CardUser userItem={user} key={nanoid()} id={user.id} />
        ))}
      </ListUsers>
      {isLoading && <Loader />}
      {visibleBtn && <BtnLoadMore loadMore={loadBtn} />}
    </SectionUsers>
  );
};

ListUserCard.propTypes = {
  users: PropTypes.array.isRequired,
  visibleBtn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadBtn: PropTypes.func.isRequired,
};
