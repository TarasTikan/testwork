import PropTypes from 'prop-types';
import { BtnLoad } from './BtnLoadMore.styled';

export const BtnLoadMore = ({ loadMore }) => {
  return (
    <BtnLoad type="button" onClick={loadMore}>
      Load more
    </BtnLoad>
  );
};

BtnLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
