import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <button type="button" className="button" onClick={() => handleClick(label)}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
