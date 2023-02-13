import Logo from '@assets/logo.png';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { accessibleModules, getNavItems, PATH_NAME } from './helper';
import { AppSideBarContainer, Brand, NavItemContainer, MenuWrapper } from './style';
import { updateRawData } from '@utils/index';

function AppBarSideBar() {
  const [activeState, setActiveState] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    const getActiveId = () => {
      if (path === '/') return PATH_NAME.DASHBOARD;
      else if (path.startsWith('/create')) return PATH_NAME.CREATE;
      else if (path.startsWith('/profile')) return PATH_NAME.PROFILE;
      else return PATH_NAME.DASHBOARD;
    };
    setActiveState(getActiveId());
  }, [path]);

  const navItems = getNavItems()
  return (
    <AppSideBarContainer direction="column">
      <div
        className="logo"
        onClick={() => {
          updateRawData({ activeStateForMobile: 1 });
          navigate('/');
        }}>
        <img src={Logo} style={{ width: 50, marginBottom: '0.5rem' }} />
        <Brand>Dave Inside</Brand>
      </div>
      <MenuWrapper>
        {navItems.map((item: any, index: number) => (
          <NavItem
            key={index}
            item={item}
            className={activeState === item.id ? 'selected' : ''}
            onItemSelect={() => {
              navigate(item.to);
            }}
          />
        ))}
      </MenuWrapper>
    </AppSideBarContainer>
  );
}

export const NavItem = (props: any) => {
  const { item, onItemSelect, isMobile, className, style } = props;
  return (
    <NavItemContainer
      className={className}
      onClick={onItemSelect}
      isMobile={isMobile}
      style={style}>
      <img src={item.icon} />
      {item.title}
    </NavItemContainer>
  );
};

export default AppBarSideBar;
