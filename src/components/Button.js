import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label }) => (
  <div>
    {label}
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
