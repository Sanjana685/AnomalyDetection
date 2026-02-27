import { useState } from "react";
import "./Worker.css";

function Worker() {
  const [location, setLocation] = useState("Machine Area A");
  const [reading, setReading] = useState(0);
  const [anomaly, setAnomaly] = useState(false);

  const generateReading = () => {
    const randomReading = Math.floor(Math.random() * 100);
    setReading(randomReading);

    if (randomReading > 70) {
      setAnomaly(true);
    } else {
      setAnomaly(false);
    }
  };

  return (
    <div className="worker-container">
      <div className="worker-card">
        <h2>Worker Dashboard</h2>

        <p><strong>Location:</strong> {location}</p>

        <p><strong>Current Reading:</strong> {reading}</p>

        <p>
          <strong>Anomaly Detected:</strong>{" "}
          <span className={anomaly ? "yes" : "no"}>
            {anomaly ? "YES ⚠️" : "NO ✅"}
          </span>
        </p>

        <button onClick={generateReading}>
          Generate New Reading
        </button>
      </div>
    </div>
  );
}

export default Worker;