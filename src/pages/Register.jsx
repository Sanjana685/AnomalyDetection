import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [workerId, setWorkerId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    const usernameRegex = /^.{4,10}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!role || !username || !password || !phone) {
      alert("Please fill all required fields");
      return;
    }

    if (role === "worker" && !workerId) {
      alert("Worker ID is required");
      return;
    }

    if (!usernameRegex.test(username)) {
      alert("Username must be 4-10 characters");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters with one capital letter, one number and one special character"
      );
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register New User</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="worker">Worker</option>
          <option value="supervisor">Supervisor</option>
        </select>

        {role === "worker" && (
          <input
            type="text"
            placeholder="Worker ID"
            value={workerId}
            onChange={(e) => setWorkerId(e.target.value)}
          />
        )}

        <input
          type="text"
          placeholder="Username"
          maxLength={10}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;