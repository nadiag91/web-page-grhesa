import React, { useState } from 'react';
import './DropdownSection.css';

interface DropdownProps {
  title: string;
  data: string[] | Record<string, string[]>;
  isSimpleList?: boolean;
}

const DropdownSection: React.FC<DropdownProps> = ({ title, data, isSimpleList = false }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setActiveCategory(null);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="main-link dropdown-button">{title}</button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {isSimpleList
            ? (data as string[]).map((item) => (
                <li key={item} className="menu-item">
                  {item}
                </li>
              ))
            : Object.keys(data as Record<string, string[]>).map((category) => (
                <li
                  key={category}
                  className="menu-item"
                  onMouseEnter={() => setActiveCategory(category)}
                >
                  {category}
                  {activeCategory === category && (
                    <ul className="submenu">
                      {(data as Record<string, string[]>)[category].map((item) => (
                        <li key={item} className="submenu-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSection;
