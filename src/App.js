import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import Home from './components/Home';
import { photos, videos } from './components/data';  // Ensure the path to data.js is correct
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">My Portfolio</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/photos">Photos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videos">Videos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<PhotoGallery photos={photos} />} />
          <Route path="/videos" element={<VideoGallery videos={videos} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
