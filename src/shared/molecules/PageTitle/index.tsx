import React from 'react';
import { Wrapper, TitleH1 } from './style';
import { Button } from '@atom/Buttons';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Flex } from '@atom/Flex';
import { Col, Row } from 'antd';
interface PageTitleProps {
  text?: string;
  children?: any;
  isBack?: boolean;
  path?: any;
  bordered?: any;
  className?: string;
  isBottom?: boolean;
  goToPage?: number;
}

export const PageTitle = (props: PageTitleProps): JSX.Element => {
  const navigate = useNavigate();
  const { text, children, isBack, path, bordered, className, isBottom, goToPage } = props;
  return (
    <Wrapper className={bordered ? 'bordered' : ''} isBottom={isBottom}>
      <Row className="mobile-fixing mobile-display-fix" gutter={4} style={{ alignItems: 'center' }}>
        <Col md={12} xs={children ? 12 : 24}>
          <Flex gap={8} alignItems={'center'}>
            {isBack ? (
              <Button
                style={{ width: 'auto' }}
                onClick={() => {
                  navigate(path, { state: { goToPage: goToPage } });
                }}
                variant="ghost"
                size="large"
                icon={<LeftOutlined />}
              />
            ) : null}
            <TitleH1 className={className} text={text}></TitleH1>
          </Flex>
        </Col>
        {children && (
          <Col md={12} xs={12}>
            <Flex
              className="btn-fixing"
              gap={8}
              justifyContent={'end'}
              style={{ maxWidth: '100%' }}
            >
              {children}
            </Flex>
          </Col>
        )}
      </Row>
    </Wrapper>
  );
};
