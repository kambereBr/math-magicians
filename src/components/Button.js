import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, btnClassName, clickEvent }) => (
  <button type="button" className={btnClassName} onClick={clickEvent}>{content}</button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  btnClassName: PropTypes.string,
  clickEvent: PropTypes.func.isRequired,
};

Button.defaultProps = {
  btnClassName: 'gray-button',
};

export default Button;
