import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';
import './Light.css';

function Header() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setProfile(user?.name || '');
      setLoading(false);
    };
    fetchUser();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="div-general-header">
      <header className="light-nav-bar" data-testid="header-component">
          <h2 data-testid="header-user-name">
            Listen to music, {profile}
          </h2>
          <nav className= "light-nav" >
            <NavLink data-testid="link-to-search" to="/search">
              Search
            </NavLink>
            <NavLink data-testid="link-to-favorites" to="/favorites">
              Favorites
            </NavLink>
            <NavLink data-testid="link-to-profile" to="/profile">
              Profile
            </NavLink>
          </nav>
      </header>
    </div>
  );
}

export default Header;
