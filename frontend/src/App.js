import React from 'react';
import TextGenerator from './components/TextGenerator';
import ImageGenerator from './components/ImageGenerator';
import MusicGenerator from './components/MusicGenerator';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to EcoAI</h1>
      
      {/* Text Generator Component */}
      <TextGenerator />

      {/* Image Generator Component */}
      <ImageGenerator />

      {/* Music Generator Component */}
      <MusicGenerator />
    </div>
  );
}

export default App;
