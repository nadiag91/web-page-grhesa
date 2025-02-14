import React, { useEffect, useRef } from 'react';
import './VideoSection.css';
import SearchBar from './SearchBar'; 

interface VideoSectionProps {
  videoURL: string;
  logoURL: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoURL, logoURL }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <section id="bienvenidos" className="video-section">
      <video ref={videoRef} autoPlay muted loop className="video-background">
        <source src={videoURL} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
      <div className="video-content">
        <div className="logo-buscador-container">
          <SearchBar />
          <img src={logoURL
        
          } alt="Logo de la empresa" className="logo-center" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
