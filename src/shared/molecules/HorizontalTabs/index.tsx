import React, { FC } from 'react';

import { CustomTab } from './style';

export interface TabsProps {
  className?: string;
  children?: React.ReactNode;
  tab?: string;
  value?: any;
  title?: string;
  activeKey?: string;
  onChange?: any;
}
const HorizontalTab: FC<TabsProps> = ({ children, tab, className, value, onChange, activeKey }) => {
  return (
    <CustomTab
      type="card"
      onChange={onChange}
      activeKey={activeKey}
      animated={false}
      size="large"
      items={value?.map((user: any) => ({
        label: user.tab,
        key: user.key,
        children: user.content,
        disabled: user?.disabled
      }))}
    />
  );
};

export default HorizontalTab;
