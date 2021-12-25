import { NavLink, Link } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};
export default Navigation;
