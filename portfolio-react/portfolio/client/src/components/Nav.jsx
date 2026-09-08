import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="nav-mark">Shivam</div>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/work" className={({ isActive }) => (isActive ? 'active' : '')}>Work</NavLink>
        </div>
      </div>
      <div className="rule" />
    </nav>
  );
}
