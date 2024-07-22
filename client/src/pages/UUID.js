import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UUID = () => {
  const [uuid, setUuid] = useState('');

  const generateUUID = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="font-jost">Generate your UUID</h1>
      <button 
        onClick={generateUUID} 
        style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Generuj
      </button>
      {uuid && (
        <p style={{ marginTop: '20px', fontFamily: 'Jost, sans-serif' }}>
          Your UUID: {uuid}
        </p>
      )}
    </div>
  );
}

export default UUID;
