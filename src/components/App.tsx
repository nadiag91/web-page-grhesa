import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header /> 
      <Home />
    </div>
  );
};

export default App;
