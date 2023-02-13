import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { BreadCrumbsContainer } from './style';
import { useNavigate } from 'react-router';

export interface BreadCrumbsProps {
  separator?: string;
  baseIcon?: any;
  routes: any;
}

const renderChildMenu = (childList: any) => {
  return (
    <Menu>
      {childList.map((childEl: any) => {
        return (
          <Menu.Item>
            <a
              // eslint-disable-next-line no-script-url
              href={childEl.path ? childEl.path : 'javascript:void(0)'}
            >
              {childEl.name}
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

const getBaseIcon = (baseIcon = null) => {
  return baseIcon ? baseIcon : <HomeOutlined />;
};

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ separator, baseIcon, routes }) => {
  const navigate = useNavigate();
  return (
    <BreadCrumbsContainer>
      <Breadcrumb separator={separator || '/'}>
        {routes.map((el: any, i: number) => {
          const last = i === routes.length - 1 ? true : false;
          return (
            <Breadcrumb.Item
              // eslint-disable-next-line no-script-url
              // href={el.path ? el.path : "javascript:void(0)"}
              key={i}
              onClick={() => navigate(el.path)}
              overlay={el.children ? renderChildMenu(el.children) : undefined}
            >
              {i === 0 ? getBaseIcon(baseIcon) : null}
              <span
                style={
                  last
                    ? { color: 'var(--color-system-purple-purple-6)', cursor: 'default' }
                    : {
                        cursor: 'pointer'
                      }
                }
              >
                {el.name}
              </span>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </BreadCrumbsContainer>
  );
};

export default BreadCrumbs;

// routes array
// routes = [
//   {
//     path: "index",
//     name: "Home",
//   },
//   {
//     path: "first",
//     name: "...",
//     children: [
//       {
//         path: "/general",
//         name: "General",
//       },
//     ],
//   },
//   {
//     path: "index",
//     name: "Middle 2",
//   },
// ];
