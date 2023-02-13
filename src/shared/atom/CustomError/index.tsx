import React from 'react';
const CustomError = ({ showError, error, fieldName }: any) => {
  return (
    <>
      {showError ? (
        <p data-testid={'error'} style={{ color: 'red' }}>
          {error && error[fieldName] && error[fieldName][0] ? error[fieldName][0].toString() : ''}
        </p>
      ) : (
        ''
      )}
    </>
  );
};

export default CustomError;
