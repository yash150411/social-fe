import React from 'react';
import { Flex } from '@atom/Flex';

function UnauthorizedPage(props: any) {
  return (
    <Flex style={{ height: '100vh' }} justifyContent={'center'}>
      <Flex justifyContent={'center'} direction="column" style={{ textAlign: 'center' }}>
        You don't have access to view this section.
        {/* <Flex direction="row" justifyContent="center" top={10} bottom={10}>
          <span>
            Click on <a href="/">Home</a> to go back to Dashboard
          </span>
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default UnauthorizedPage;
