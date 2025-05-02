import "./LandingButton.css";
const LandingButton = ({ label, onClick }) => {
  return <button className="primary-button" onClick={onClick}>{label}</button>;
};

export default LandingButton;
