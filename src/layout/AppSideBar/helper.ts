import PlusCircle from '@assets/plus-circle.svg';
import DashboardIcon from '@assets/menu-icon/dashboard.png';

export enum PATH_NAME {
  DASHBOARD = 1,
  CREATE = 2,
  PROFILE = 3
}

export const getNavItems = () => {
  const navItems = [
    {
      title: 'Dashboard',
      icon: DashboardIcon,
      to: '/',
      id: PATH_NAME.DASHBOARD
    }, {
      title: 'Create',
      icon: PlusCircle,
      to: '/create/add-post',
      id: PATH_NAME.CREATE
    },
    {
      title: 'Profile',
      icon: PlusCircle,
      to: '/profile',
      id: PATH_NAME.PROFILE
    }
  ];
  return navItems;
};

export const accessibleModules = (user: any) => {
  const { isManager, isEmployee } = user;
  const navItemIds = isManager ? [1, 2, 3, 4, 5, 7, 10] : isEmployee ? [1, 2, 7, 10] : [];
  return navItemIds;
};
