import React, { useState } from 'react';

function UrbanDesigner() {
  const [urbanData, setUrbanData] = useState('');
  const [design, setDesign] = useState(null);

  const generateDesign = async () => {
    const response = await fetch('/generate_design', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urban_data: urbanData }),
    });
    const data = await response.json();
    setDesign(data.design_path);
  };

  return (
    <div>
      <h2>Generate Urban Design</h2>
      <input
        type="text"
        placeholder="Enter urban data"
        value={urbanData}
        onChange={(e) => setUrbanData(e.target.value)}
      />
      <button onClick={generateDesign}>Generate Design</button>
      {design && <img src={design} alt="Generated Design" />}
    </div>
  );
}

export default UrbanDesigner;
