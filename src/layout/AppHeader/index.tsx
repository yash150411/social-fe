import { Dropdown, Menu, Space } from 'antd';

import { MenuOutlined } from '@ant-design/icons';
import Logo from '@assets/logo.png';
import { Flex } from '@atom/Flex';
import { DEVICE } from '@constants/index';
import { useWindowSizeChanged } from '@hooks/useWindowSizeChanged';
import { logoutUser, updateRawData } from '@utils/index';
import { AppHeaderContainer } from './styles';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoImage from '@assets/noimage.png';

const menu = (isAdmin: boolean) => {
  const navigate = useNavigate();

  const items = [
    {
      key: '1',
      label: (
        <NavLink to="/" onClick={() => updateRawData({ activeStateForMobile: 0 })}>
          Dashboard
        </NavLink>
      )
    },
    {
      key: '3',
      label: <div onClick={() => logoutUser(navigate)}>Log Out</div>
    }
  ];

  if (isAdmin) {
    items.splice(1, 0, {
      key: '2',
      label: (
        <NavLink to="/settings" onClick={() => updateRawData({ activeStateForMobile: 0 })}>
          Global Settings
        </NavLink>
      )
    });
  }

  return <Menu className="headerMenuItems" items={items} />;
};

function AppHeader() {
  const navigate = useNavigate();
  const user = useSelector(
    (state: { user: { isAdmin: boolean; profile_pic: string } }) => state.user
  );

  const device = useWindowSizeChanged();

  return (
    <AppHeaderContainer>
      <Flex
        className="mobileLogo"
        onClick={() => {
          updateRawData({ activeStateForMobile: 1 });
          navigate('/');
        }}
      >
        <img src={Logo} />
        <span>Yash Dave</span>
      </Flex>
      <Flex justifyContent={'end'} direction={'row-revers'} flex={1} alignItems={'center'}>
        <Dropdown
          overlay={menu(user?.isAdmin)}
          trigger={['click']}
          overlayStyle={{
            width: DEVICE.MOBILE === device ? 'calc(57% - 1.5rem)' : 'auto'
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <img src={user?.profile_pic || NoImage} className="userProfile" />
            </Space>
          </a>
        </Dropdown>
        {(DEVICE.MOBILE === device || DEVICE.TAB === device) && (
          <Flex
            left={10}
            onClick={() => {
              updateRawData({ showSideBar: true });
            }}
          >
            <MenuOutlined style={{ fontSize: 20 }} />
          </Flex>
        )}
      </Flex>
    </AppHeaderContainer>
  );
}

export default AppHeader;
