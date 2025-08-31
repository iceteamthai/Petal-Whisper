import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div 
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" 
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: null,
};

export default ErrorMessage;