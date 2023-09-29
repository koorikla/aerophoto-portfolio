import React from 'react';
import PanoramaViewer from './PanoramaViewer';

function App() {
  const image = "/images/photo3.jpg";
  
  return (
    <div className="App">
      <PanoramaViewer image={image} />
    </div>
  );
}


export default App;


