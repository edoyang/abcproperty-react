import { useState, useRef, useEffect } from 'react';
// import './dropdown.scss';

type DropdownProps = {
  options: string[];
  defaultLabel?: string;
  isActive: boolean;
  onToggle: (active: boolean) => void; 
};

const Dropdown = ({
  options,
  defaultLabel = 'Select Option',
  isActive,
  onToggle,
}: DropdownProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultLabel);
  const dropdownRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isActive && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive, onToggle]); 

  const handleButtonClick = (): void => {
    onToggle(!isActive); 
  };

  const handleOptionChange = (option: string): void => {
    setSelectedOption(option.charAt(0).toUpperCase() + option.slice(1));
    onToggle(false); 
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className={`dropdown dropdown-btn`} onClick={handleButtonClick}>
        {selectedOption} <img src="expand-arrow.svg" alt="Expand" />
      </button>
      {isActive && (
        <div className={`dropdown-content`}>
          {options.map((option) => (
            <button
              key={option}
              className="dropdown-btn"
              onClick={() => handleOptionChange(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
