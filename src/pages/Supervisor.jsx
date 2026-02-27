import { useState } from "react";
import "./Supervisor.css";

function Supervisor() {
  const [data, setData] = useState([
    { location: "Machine Area A", reading: 45 },
    { location: "Machine Area B", reading: 82 },
    { location: "Machine Area C", reading: 60 }
  ]);

  return (
    <div className="supervisor-container">
      <h2>Supervisor Dashboard</h2>

      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Reading</th>
            <th>Anomaly</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.location}</td>
              <td>{item.reading}</td>
              <td className={item.reading > 70 ? "yes" : "no"}>
                {item.reading > 70 ? "YES ⚠️" : "NO"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Supervisor;