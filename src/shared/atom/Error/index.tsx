import React from 'react';

function Error(props: { error: string }) {
  const { error } = props;
  return <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>;
}

export default Error;
