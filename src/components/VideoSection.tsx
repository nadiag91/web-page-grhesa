import React, { useEffect } from 'react';
import './VideoSection.css'; 

const VideoSection: React.FC = () => {
  
  useEffect(() => {
    const videoElement = document.querySelector<HTMLVideoElement>('.video-background');
    if (videoElement) {
      videoElement.playbackRate = 1.5; // Ajusta la velocidad del video
    }
  }, []);

  return (
    <section id="bienvenidos" className="video-section">
      <video autoPlay muted loop className="video-background">
        <source src="/video-bienvenidos.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
      <div className="video-content">
        <img src="logonena.png" alt="Logo de la empresa" className="logo-centernena" />
        <img src="logo.png" alt="Logo de la empresa" className="logo-center" />
      </div>
    </section>
  );
};

export default VideoSection;
