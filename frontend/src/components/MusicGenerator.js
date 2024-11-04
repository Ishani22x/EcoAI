import React, { useState } from 'react';

function MusicGenerator() {
  const [theme, setTheme] = useState('');
  const [audio, setAudio] = useState(null);

  const generateMusic = async () => {
    const response = await fetch('http://127.0.0.1:5000/generate_music', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme }),
    });
    const data = await response.json();
    setAudio(data.audio_path);
  };

  return (
    <div>
      <h2>Generate Environmental Music</h2>
      <input
        type="text"
        placeholder="Enter a theme (e.g., forest, ocean)"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />
      <button onClick={generateMusic}>Generate Music</button>
      {audio && <audio controls src={`http://127.0.0.1:5000/${audio}`} />}
    </div>
  );
}

export default MusicGenerator;
