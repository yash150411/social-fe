import AppHeader from '@layout/AppHeader';
import AppBarSideBar from '@layout/AppSideBar';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router';
import { Container } from './style';
import { useWindowSizeChanged } from '@hooks/useWindowSizeChanged';
import { DEVICE } from '@constants/index';
import MobileSideBar from '@layout/MobileSideBar';
import ScrollToTop from './scrollToTop';

function AppLayout() {
  const device = useWindowSizeChanged();
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = (event: any) => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  return (
    <Container>
      {device === DEVICE.MOBILE || device === DEVICE.TAB ? <MobileSideBar /> : <AppBarSideBar />}
      <Layout style={{ width: '91%' }}>
        <AppHeader />
        <Content className="site-layout-background" id="scroll-to-top" onScroll={handleScroll}>
          <div>
            <Outlet />  
          </div>
        </Content>
        {scrollTop && scrollTop >= 100 && <ScrollToTop />}
      </Layout>
    </Container>
  );
}

export default AppLayout;
