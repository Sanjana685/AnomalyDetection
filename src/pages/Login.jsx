import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [role, setRole] = useState("worker");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "worker") {
      navigate("/worker");
    } else {
      navigate("/supervisor");
    }
  };

  return (
  <div className="login-container">
    <div className="login-card">
      <h2>Vibration Anomaly Detection</h2>

      <input
        type="text"
        placeholder="Username"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="worker">Worker</option>
        <option value="supervisor">Supervisor</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  </div>
);
}

export default Login;