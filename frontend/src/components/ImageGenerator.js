import React, { useState } from 'react';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    const response = await fetch('http://127.0.0.1:5000/generate_image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setImage(data.image_path);
  };

  return (
    <div>
      <h2>Generate Eco-Art</h2>
      <input
        type="text"
        placeholder="Enter an image prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate Image</button>
      {image && <img src={`http://127.0.0.1:5000/${image}`} alt="Generated Eco-Art" />}
    </div>
  );
}

export default ImageGenerator;
