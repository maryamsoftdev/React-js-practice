import React, { useState } from 'react';

const PreLoader = () => {
  const [isLoading] = useState(true);

  return (
    <div className={`preloader ${isLoading ? 'blur' : ''}`}>
      <div className="spinner-container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
