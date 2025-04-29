import universe_zoomed from "../../Assets/Images/universe_zoomed.jpg";
import IconButton from "../../Utils/IconButton/IconButton";
import "./Components/Register.css";

const Register = () => {
  return (
    <section className="register-section">
      <div className="image-container">
        <IconButton />
      </div>
      <div>
        <h3>Get in w/ Google</h3>
        <button>GOOGLE</button>
      </div>
    </section>
  );
};

export default Register;
