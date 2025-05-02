import "./PrimaryButton.css";

const PrimaryButton = ({ label, onClick, animated = false }) => {
  const className = `primary-button ${animated ? "animated" : ""}`;
  return <button className={className} onClick={onClick}>{label}</button>;
};

export default PrimaryButton;
