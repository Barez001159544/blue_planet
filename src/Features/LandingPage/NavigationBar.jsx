import "./Components/NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">The Blue Planet</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Login</a>
        </li>
        <li>
          <a href="#explore">Sign-Up</a>
        </li>
        <li>
          <a href="#mission">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
