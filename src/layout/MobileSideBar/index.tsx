import { NavItem } from '@layout/AppSideBar';
import { accessibleModules, getNavItems } from '@layout/AppSideBar/helper';
import { updateRawData } from '@utils/index';
import { Drawer } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { CloseOutlined } from '@ant-design/icons';

function MobileSideBar() {
  const { showSideBar } = useSelector((state: any) => state.rawData);
  const { activeStateForMobile } = useSelector((state: any) => state.rawData);
  const navigate = useNavigate();
  const onClose = () => {
    updateRawData({ showSideBar: false });
  };

  const handleClick = (obj: any) => {
    updateRawData({ activeStateForMobile: obj });
  };

  useEffect(() => {
    updateRawData({ activeStateForMobile: 1 });
  }, []);

  const user = useSelector((state: { user: any }) => state.user);
  const { isAdmin } = user;
  const navItems = getNavItems().filter(
    (item: any) => (!isAdmin && accessibleModules(user).includes(item?.id)) || isAdmin
  );
  return (
    <Drawer
      closeIcon={<CloseOutlined style={{ stroke: 'black', strokeWidth: '90px' }} />}
      placement={'right'}
      closable={true}
      onClose={onClose}
      open={showSideBar}
      key={'right'}
      width={280}
      bodyStyle={{ padding: '0px' }}
    >
      {navItems.map((item: any, index: number) => (
        <NavItem
          style={{
            gap: 10,
            fontSize: '17px',
            fontWeight: 500,
            borderLeft: '10px solid transparent'
          }}
          key={index}
          item={item}
          className={`mobile-side-bar-nav ${activeStateForMobile === item.id ? 'selected' : ''}`}
          onItemSelect={() => {
            navigate(item.to);
            updateRawData({ showSideBar: false });
            handleClick(item.id);
          }}
          isMobile={true}
        />
      ))}
    </Drawer>
  );
}

export default MobileSideBar;
