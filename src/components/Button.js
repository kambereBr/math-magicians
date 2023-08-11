import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, btnClassName = 'gray-button', clickEvent }) => (
  <button type="button" className={btnClassName} onClick={clickEvent}>{content}</button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  btnClassName: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

export default Button;
