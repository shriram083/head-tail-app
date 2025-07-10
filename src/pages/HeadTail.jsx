import React, { useState } from "react";
import "../styles/HeadTail.css";

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!selectedValue) {
      setError("Please select value from dropdown");
      return;
    }

    setError("");
    let newColumns = [...columns];

    if (
      newColumns.length === 0 ||
      newColumns[newColumns.length - 1][0] !== selectedValue
    ) {
      newColumns.push([selectedValue]);
    } else {
      newColumns[newColumns.length - 1].push(selectedValue);
    }

    setColumns(newColumns);
    setSelectedValue("");
  };

  return (
    <div className="headtail-container">
      <h1>Head & Tail Page</h1>

      <div className="headtail-controls">
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">Select Value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="headtail-columns">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="column">
            {col.map((val, valIndex) => (
              <div key={valIndex} className="value-box">
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadTail;
