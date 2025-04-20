import "./Components/NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🚀 SpaceApp</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
