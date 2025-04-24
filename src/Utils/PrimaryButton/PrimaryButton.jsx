import "./PrimaryButton.css";
const PrimaryButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default PrimaryButton;
