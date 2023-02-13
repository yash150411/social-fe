import { Flex } from '@atom/Flex';
import { Spin } from 'antd';
import React from 'react';

function CenterSpiner() {
  return (
    <Flex justifyContent={'center'} direction="column" style={{ height: '100%' }}>
      <Flex justifyContent={'center'}>
        <Spin />
      </Flex>
    </Flex>
  );
}

export default CenterSpiner;
