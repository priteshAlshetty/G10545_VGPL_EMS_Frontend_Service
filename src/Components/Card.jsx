import React from 'react';
import './Card.css';

const Card = ({ title, data, onSelect, isActive }) => {
  return (
    <div
      className={`card ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(title, data)}
    >
      <h2>{'\u26A1'}{title}</h2>

      <ul>
        {typeof data === 'object'
          ? Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))
          : <li>{data}</li>}
      </ul>
    </div>
  );
};

export default Card;
