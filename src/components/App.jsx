import { Home } from 'pages/Home';
import { Tweets } from 'pages/Tweets';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
};
