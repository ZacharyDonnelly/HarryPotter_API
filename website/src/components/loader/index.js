import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      right: '50%',
      transform: 'translate(50%, -50%)',
    }}>
    <div className="full-page-loader">
      <ClipLoader sizeUnit={'px'} size={150} color={'#3454D1'} loading={true} />
    </div>
  </div>
);

export default Loader;
