// src/Home.js

import React from 'react';
import PhotoGallery from './PhotoGallery';
import VideoGallery from './VideoGallery';
import { photos, videos } from './data';  // Ensure the path to data.js is correct

function Home() {
  return (
    <div>
      <h1>Aerophoto Portfolio</h1>
      <p>Welcome to my drone photo and video portfolio.</p>

      <h2>Latest Photos</h2>
      {/* Render only a few photos */}
      <PhotoGallery photos={photos.slice(0, 3)} />

      <h2>Latest Videos</h2>
      {/* Render only a few videos */}
      <VideoGallery videos={videos.slice(0, 3)} />
    </div>
  );
}

export default Home;
