// routes.js

import LandingPage from "../Features/LandingPage/LandingPage";
import Register from "../Features/Register/Register";

export const ROUTES = {
    HOME: '/',
    REGISTER: '/Register',
  };

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/Register", element: <Register /> },
];

export default routes;
