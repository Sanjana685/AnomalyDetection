import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Worker from "./pages/Worker";
import Supervisor from "./pages/Supervisor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/worker" element={<Worker />} />
        <Route path="/supervisor" element={<Supervisor />} />
      </Routes>
    </Router>
  );
}

export default App;