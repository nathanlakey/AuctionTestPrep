import { useState, useEffect, useRef } from 'react';
import './CustomSelect.css';

/**
 * Shared branded dropdown component.
 * @param {string}   value        – currently selected value (display label)
 * @param {function} onChange     – called with the selected value
 * @param {string}   placeholder  – placeholder when nothing selected
 * @param {Array}    options      – array of { value, label } objects
 */
function CustomSelect({ value, onChange, placeholder = '-- Select --', options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Find the label for the current value
  const selectedOption = options.find(o => o.value === value);
  const displayLabel = selectedOption ? selectedOption.label : '';

  return (
    <div className="custom-select" ref={ref}>
      <button
        type="button"
        className={`custom-select-trigger ${value !== '' && value !== undefined ? 'has-value' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{displayLabel || placeholder}</span>
        <span className={`custom-select-arrow ${isOpen ? 'open' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <ul className="custom-select-options">
          {options.map(opt => (
            <li
              key={opt.value}
              className={`custom-select-option ${opt.value === value ? 'selected' : ''}`}
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
