// search.tsx
import React, { useRef } from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.classList.add('focused');
    }
  };

  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.classList.remove('focused');
    }
  };

  return (
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar producto..." onFocus={handleFocus} onBlur={handleBlur} ref={inputRef} />
        <img src="searcherIcon.png" alt="Icono de búsqueda" className="search-icon" />
        <div className="light-effect"></div>
        <div className="final-border"></div>

      </div>
)};

export default SearchBar;