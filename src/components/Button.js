import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, btnClassName = 'gray-button' }) => (
  <button type="button" className={btnClassName}>{content}</button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  btnClassName: PropTypes.string.isRequired,
};

export default Button;
