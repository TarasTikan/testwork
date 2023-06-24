import { fetchUsers } from 'api/fetchUser';
import { ListUserCard } from 'components/ListUserCard/ListUserCard';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [visibleLoadMore, setVisibleLoadMore] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (page === 0) {
      setPage(1);
    }
    setLoading(true);
    fetchUsers(page)
      .then(item => setUsers(prevUser => [...prevUser, ...item.data]))
      .finally(() => {
        setLoading(false);
        setVisibleLoadMore(true);
      });
  }, [page]);

  const handleLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
    setVisibleLoadMore(false);
  };
  const handleBackBtn = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <>
      <main>
        <ListUserCard
          loadBtn={handleLoadMoreBtn}
          BackBtn={handleBackBtn}
          users={users}
          visibleBtn={visibleLoadMore}
          isLoading={loading}
        />
        <Outlet />
      </main>
    </>
  );
};
