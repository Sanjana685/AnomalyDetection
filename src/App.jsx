import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Worker from "./pages/Worker";
import Supervisor from "./pages/Supervisor";
import Register from "./pages/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/worker" element={<Worker />} />
        <Route path="/supervisor" element={<Supervisor />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;