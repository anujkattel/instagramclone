import React, { useState } from 'react';

const LoveReactButton = () => {
  const [isLoved, setLoved] = useState(false);
  const handleLoveClick = () => {
    setLoved(!isLoved);
    
  };

  return (
    <button
      onClick={handleLoveClick}
      style={{ color: isLoved ? 'red' : 'black' }}
    >
      {isLoved ? '❤️' : '🤍'}
      
    </button>
  );
};

export default LoveReactButton;
