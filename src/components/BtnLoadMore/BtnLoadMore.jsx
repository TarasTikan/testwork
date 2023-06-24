import { BtnLoad } from "./BtnLoadMore.styled";

export const BtnLoadMore = ({ loadMore }) => {
  return (
    <BtnLoad type="button" onClick={loadMore}>
      Load more
    </BtnLoad>
  );
};