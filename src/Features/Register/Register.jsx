import universe_zoomed from "../../Assets/Images/universe_zoomed.jpg";
import IconButton from "../../Utils/IconButton/IconButton";
import "./Components/Register.css";

const Register = () => {
  const btnIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="black"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
  return (
    <section className="register-section">
      <div className="image-container">
        <IconButton icon={btnIcon} />
      </div>
      <div className="content-container">
        <div className="in-content-container">
          <h3>Get in w/ Google</h3>
          <button>GOOGLE</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
