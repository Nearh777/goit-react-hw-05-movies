import React from 'react';
import PropTypes from 'prop-types';
import { BoxDiv } from './Box.styled.jsx';

const Box = ({ children }) => {
  return <BoxDiv>{children}</BoxDiv>;
};

export default Box;

Box.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
};
