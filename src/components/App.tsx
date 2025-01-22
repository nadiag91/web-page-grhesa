import React from 'react';
import '../App.css';
import Header from './Header';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header /> 
      <AppRoutes />
    </div>
  );
};

export default App;
