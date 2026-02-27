import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {
  const usernameRegex = /^.{4,10}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  if (!username || !password || !role) {
    alert("Please fill all fields");
    return;
  }

  if (!usernameRegex.test(username)) {
    alert("Username must be between 4 and 10 characters");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters, include one capital letter, one number and one special character"
    );
    return;
  }

  // If everything valid
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
  value={username}
  maxLength={10}
  onChange={(e) => setUsername(e.target.value)}
/>

<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select</option>
        <option value="worker">Worker</option>
        <option value="supervisor">Supervisor</option>
      </select>

      <button onClick={handleLogin}>Login</button>
      <div className="login-links">
  <p onClick={() => alert("Forgot Password feature coming soon!")}>
    Forgot Password?
  </p>
  <p onClick={() => navigate("/register")}>
    Register
  </p>
</div>
    </div>
    
  </div>
  
);
}

export default Login;