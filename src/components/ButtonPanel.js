import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="button-groups">
    <div className="btn-group-a">
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" />
    </div>
    <div className="btn-group-a">
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="x" />
    </div>
    <div className="btn-group-a">
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" />
    </div>
    <div className="btn-group-a">
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" />
    </div>
    <div className="btn-group-b">
      <Button label="0" />
      <Button label="." />
      <Button label="=" />
    </div>
  </div>
);

export default ButtonPanel;
