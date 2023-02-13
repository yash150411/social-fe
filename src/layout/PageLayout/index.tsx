import React, { useEffect } from 'react';
import { PageLayoutContainer } from './styles';

function PageLayout(props: any) {
  useEffect(() => {
    document.title = `${props.title ? props.title + '-' : ''} The Food Dudes`;
  }, [props.title]);

  return <PageLayoutContainer>{props.children}</PageLayoutContainer>;
}

export default PageLayout;
