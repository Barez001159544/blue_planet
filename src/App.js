import "./App.css";
import "../src/Assets/Fonts/Karantina-Light.ttf";
import "../src/Assets/Fonts/Karantina-Regular.ttf";
import "../src/Assets/Fonts/Karantina-Bold.ttf";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes/Routes";
import LandingPage from "./Features/LandingPage/LandingPage";
import Register from "./Features/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
