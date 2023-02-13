import React, { FC } from 'react';
import ModalComponent from '@organism/Modal/Modal';
import { Flex } from '@atom/Flex';
import { ModalWrapper, Wrapper } from './style';
import { Button } from '@atom/Buttons';
import { CSSProperties } from 'styled-components';
import { Spin } from 'antd';

interface ThemeType {
  title?: CSSProperties;
  desc?: CSSProperties;
  divider?: CSSProperties;
  btn?: CSSProperties;
}
interface Values {
  visible?: boolean;
  onOK?: () => void;
  onCancel?: () => void;
  okFirst?: boolean;
  okText?: string;
  cancelText?: string;
  title: string;
  children?: string | React.ReactNode;
  icon?: React.ReactNode;
  theme?: ThemeType;
  flexValueForContent?: number | string;
  modalSaveButtonLoader?: boolean;
  isModalLoading?: boolean;
  closable?: boolean;
}
const ConfirmModal: FC<Values> = ({
  icon,
  visible,
  onOK,
  onCancel,
  okFirst,
  title,
  children,
  okText,
  cancelText,
  theme,
  flexValueForContent,
  modalSaveButtonLoader = false,
  isModalLoading,
  closable
}) => {
  return (
    <Wrapper>
      <ModalComponent visible={visible} onOK={onOK} onCancel={onCancel} closable={closable}>
        {!!isModalLoading ? (
          <Spin />
        ) : (
          <ModalWrapper direction="column">
            <Flex direction="row" alignItems={'center'}>
              <Flex style={theme?.title} flex={1} className="title" justifyContent={'center'}>
                {title}
              </Flex>
            </Flex>
            <Flex direction="row" alignItems={'center'}>
              {/* <Flex flex={flexValueForContent || 0.2} /> */}
              {flexValueForContent}
              <Flex
                style={theme?.desc}
                top={20}
                flex={1}
                className="description"
                direction="column"
                justifyContent={'center'}
              >
                {children}
                <Flex
                  top={40}
                  gap={8}
                  style={theme?.btn}
                  justifyContent={'center'}
                  className="fix-mobile"
                >
                  {okFirst ? null : (
                    <Button
                      variant="secondary"
                      text={cancelText || 'Cancel'}
                      onClick={onCancel}
                      isDisable={modalSaveButtonLoader}
                      className="cancel-btn"
                    />
                  )}
                  <Button
                    variant="primary"
                    text={okText || 'Proceed anyway'}
                    onClick={onOK}
                    isLoading={modalSaveButtonLoader}
                  />
                  {okFirst ? (
                    <Button
                      variant="secondary"
                      text={cancelText || 'Cancel'}
                      onClick={onCancel}
                      isDisable={modalSaveButtonLoader}
                      className="cancel-btn"
                    />
                  ) : null}
                </Flex>
              </Flex>
            </Flex>
          </ModalWrapper>
        )}
      </ModalComponent>
    </Wrapper>
  );
};
export default ConfirmModal;
