import React, { MutableRefObject, useRef } from 'react';

import Button from '../../components/Button/Button';

import './styles.css';

function Main() {
  const startRef = useRef(null) as MutableRefObject<null>;

  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="cube start" ref={startRef}>
          1
        </div>
        <div className="cube end">2</div>
        <Button />
      </div>
    </div>
  );
}

export default Main;
