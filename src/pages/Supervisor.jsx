import "./Supervisor.css";
import { useNavigate } from "react-router-dom";

function Supervisor() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="supervisor-container">
      <header className="supervisor-header">
        <h2>Supervisor Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
  Logout
</button>
      </header>

      <div className="supervisor-content">
        <div className="card">
          <h3>Total Machines</h3>
          <p>5 Active</p>
        </div>

        <div className="card">
          <h3>Current System Status</h3>
          <p className="normal">All Systems Normal</p>
        </div>

        <div className="card alert-card">
          <h3>Recent Anomalies</h3>
          <ul>
            <li>Machine 2 – High vibration</li>
            <li>Machine 4 – Bearing issue</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Supervisor;