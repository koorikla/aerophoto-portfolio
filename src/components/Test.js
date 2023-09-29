import React from 'react';
import PanoramaViewer from './PanoramaViewer';

function App() {
  const image = "/images/photo4.jpg";
  
  return (
    <div className="App">
      <PanoramaViewer image={image} />
    </div>
  );
}


export default App;


