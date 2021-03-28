import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/mission">Mission</Link>
        <Link to="/health">Health</Link>
        <Link to="/education">Education</Link>
        <Link to="/seniorliving">Senior Living</Link>
      </div>
    </nav>
  );
}

export default Navbar;
