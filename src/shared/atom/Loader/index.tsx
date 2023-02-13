import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface LoaderProps {
  loading: boolean;
}
export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin={true} />;

  return (
    <>
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '30%'
          }}
          data-testid="loader"
        >
          <Spin indicator={antIcon} />
        </div>
      )}
    </>
  );
};

export default Loader;
