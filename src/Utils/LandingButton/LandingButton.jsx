import "./LandingButton.css";
const LandingButton = ({ label, onClick }) => {
  return <button className="landing-button" onClick={onClick}>{label}</button>;
};

export default LandingButton;
