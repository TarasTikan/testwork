import { ColorRing } from 'react-loader-spinner';
import { Loadering } from './Loader.styled';
export const Loader = () => {
  return (
    <Loadering>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#EBD8FF', '#f47e60', '#f8b26a', '#5736A3', '#5CD3A8']}
      />
    </Loadering>
  );
};
