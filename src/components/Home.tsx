import React, { Component } from 'react';
import './Home.css';
import VideoSection from './VideoSection';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <VideoSection />
      </div>
    );
  }
}

export default Home;

