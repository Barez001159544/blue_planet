import HomePage from "../Features/HomePage/HomePage";
import LandingPage from "../Features/LandingPage/LandingPage";
import Register from "../Features/Register/Register";

export const ROUTES = {
  LANDING: "/",
  REGISTER: "/Register",
  HOME: "/HomePage",
};

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/Register", element: <Register /> },
  { path: "/Home", element: <HomePage /> },
];

export default routes;
