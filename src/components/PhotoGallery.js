// src/PhotoGallery.js
import React, { useState } from 'react';
import PanoramaViewer from './PanoramaViewer';

function PhotoGallery({ photos = [] }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="gallery">
      {photos.map((photo, index) => (
        <div key={photo.id} className="photo-card" onClick={() => handleClick(photo)}>
          <div className={`photo-crop${isFullscreen && photo === selectedPhoto ? ' fullscreen' : ''}`}>
            {photo.is360 ? (
              <PanoramaViewer image={photo.url} />
            ) : (
              <img src={photo.url} alt={`${index}`} />
            )}
          </div>
          <div className="photo-comment">
            {photo.comment}
          </div>
        </div>
      ))}
      {isFullscreen && !selectedPhoto.is360 && (
        <div className="fullscreen-modal" onClick={() => setIsFullscreen(false)}>
          <img src={selectedPhoto.url} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
