import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayGround from "./playground.js";
import LoginPage from "./login.js";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/prof" element={<PlayGround />} />
      </Routes>
    </Router>
  );
}
export default Home;
