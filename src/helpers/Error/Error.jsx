import {Title} from './Error.styled.jsx';
import PropTypes from 'prop-types';

export const Error = ({ text }) => {
  return (
    <>
      <Title >{text}</Title>
    </>
  );
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};