import "./Components/NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">The Blue Planet</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#info">Our Planet</a>
        </li>
        <li>
          <a href="#recent">Recent Techs</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
