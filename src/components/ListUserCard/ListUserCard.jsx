import { CardUser } from 'components/CardUser/CardUser';
import { BtnBack, ListUsers, SectionUsers } from './ListUserCard.styled';
import { BtnLoadMore } from 'components/BtnLoadMore/BtnLoadMore';
import { nanoid } from 'nanoid';
import { Loader } from 'components/Loader/Loader';

export const ListUserCard = ({
  loadBtn,
  BackBtn,
  users,
  visibleBtn,
  isLoading,
}) => {
  return (
    <SectionUsers>
      <BtnBack onClick={BackBtn} type="button">
        Back
      </BtnBack>
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
