import { useNavigate } from "react-router-dom";
import "./Worker.css";

function Worker() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="worker-container">
      <header className="worker-header">
        <h2>Worker Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="worker-content">
        <div className="card">
          <h3>Machine Status</h3>
          <p>Status: <span className="normal">Normal</span></p>
        </div>
      </div>
    </div>
  );
}

export default Worker;