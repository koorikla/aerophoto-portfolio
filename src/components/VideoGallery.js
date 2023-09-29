// src/VideoGallery.js

import React from 'react';

function VideoGallery({ videos = [] }) {
  return (
    <div className="video-gallery">
      {videos.map((videoId) => (
        <div key={videoId} className="video-card">
          <div className="video-crop">
            <iframe 
              title={`Video ${videoId}`} 
              src={`https://www.youtube.com/embed/${videoId}`} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoGallery;
