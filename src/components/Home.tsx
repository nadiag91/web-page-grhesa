import React from 'react';
import VideoSection from './VideoSection';
import ProductSection from './ProductSection';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="HomePage">
      <VideoSection videoURL="/video-bienvenidos.mp4" logoURL="/logo.png" />
      <ProductSection />
    </div>
  );
};

export default Home;

