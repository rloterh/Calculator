import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  React.state = {
    total: null,
    next: null,
    operation: null,
  };

  const handleClick = (buttonName) => {
    const newState = calculate(React.state, buttonName);
    React.setState(newState);
  };

  const update = () => {
    const { total, next, operation } = React.state;

    if (next) {
      return next;
    }
    return total;
  };

  return (
    <div className="App">
      <Display result={update()} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};

export default App;
