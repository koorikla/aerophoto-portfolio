import React, { useEffect, useRef } from 'react';

function PanoramaViewer({ image }) {
  const panoramaContainer = useRef(null);

  useEffect(() => {
    const currentContainer = panoramaContainer.current;  // Capture the current value

    if (currentContainer && window.pannellum) {
      window.pannellum.viewer(currentContainer, {
        type: 'equirectangular',
        panorama: image,
        autoLoad: true
      });
    }

    // Cleanup on unmount
    return () => {
      if (currentContainer && window.pannellum) {
        currentContainer.innerHTML = '';  // This will remove the Pannellum viewer
      }
    };
  }, [image]);

  return (
    <div ref={panoramaContainer} style={{ width: '100%', height: '400px' }} />
  );
}

export default PanoramaViewer;
