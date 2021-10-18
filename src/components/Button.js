import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, handleClick }) => (
  <button type="button" className="button" onClick={() => handleClick(label)}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
