import React from 'react';
import './feature.css';

export function Feature({ title, text }) {
  return (
    <div className='sls1__features-container__feature'>
      <div className='sls1__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='sls1__features-container_feature-text'>{text}</div>
    </div>
  );
}

export default Feature;
