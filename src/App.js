import "./App.css";
import "../src/Assets/Fonts/Karantina-Light.ttf";
import "../src/Assets/Fonts/Karantina-Regular.ttf";
import "../src/Assets/Fonts/Karantina-Bold.ttf";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes/Routes";
import LandingPage from "./Features/LandingPage/LandingPage";
import Register from "./Features/Register/Register";
import HomePage from "./Features/HomePage/HomePage";
import DetailPage from "./Features/DetailPage/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.DETAIL} element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
