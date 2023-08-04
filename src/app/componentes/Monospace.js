'use client';

import { useState } from 'react';

const fonts = {
  serif: ['Playfair Display', 'Roboto Slab', 'Merriweather'],
  sansSerif: ['Open Sans', 'Roboto', 'Lato'],
  monospace: ['Fira Code', 'Roboto Mono', 'Source Code Pro'],
};

export default function Monospace() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container mt-5 box-shadow p-5">
      <h1>Fontes Bônus monospace</h1>
      {fonts.monospace.map((font, index) => (
        <div key={index}>
          <h2 style={{ fontFamily: font }}>{font}</h2>
          <textarea
            rows="3"
            className="form-control"
            value={inputValue}
            style={{ fontFamily: font }}
            placeholder="Teste aqui a fonte"
            onChange={handleInputChange}
          />
        </div>
      ))}
    </div>
  );
}
