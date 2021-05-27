import PropTypes from 'prop-types';
import React from 'react';
import Button from '@material-ui/core/Button';

const BackButton = (props) => {
  const { dest, text } = props;

  return (
    <Button variant="secondary" href={`${dest}`}>{text}</Button>
  );
};

BackButton.propTypes = {
  dest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BackButton;