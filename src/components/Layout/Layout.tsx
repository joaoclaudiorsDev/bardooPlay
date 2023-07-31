import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import ThemeButton from '../Button/Button';

function Layout() {
  return (

    <>
      <Header />
      <Outlet />
    </>

  );
}

export default Layout;
