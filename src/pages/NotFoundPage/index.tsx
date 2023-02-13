import React from 'react';

import { Flex } from '@atom/Flex';
import { H1Typography, H3Typography } from '@constant/typography/Typography';
import PageLayout from '@layout/PageLayout';

function NotFoundPage() {
  return (
    <PageLayout>
      <Flex direction="column" justifyContent={'center'} style={{ height: 400 }}>
        <Flex justifyContent={'center'}>
          <Flex direction="column" alignItems={'center'}>
            <H1Typography>404</H1Typography>
            <H3Typography>Page Not Found</H3Typography>
          </Flex>
        </Flex>
      </Flex>
    </PageLayout>
  );
}

export default NotFoundPage;
