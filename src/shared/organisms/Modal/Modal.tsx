import { FC } from 'react';

import { ModalWrapper } from './style';

interface Values {
  visible?: boolean;
  onOK?: any;
  onCancel?: any;
  title?: React.ReactNode;
  modalimage?: any;
  content?: any;
  children?: any;
  modalWidth?: any;
  isModalOpen?: any;
  handleOk?: any;
  type?: any;
  onClick?: any;
  align?: any;
  okText?: any;
  cancelText?: any;
  closable?: boolean;
  padding?: any;
}
const ModalComponent: FC<Values> = ({
  visible,
  onOK,
  okText,
  onCancel,
  cancelText,
  title,
  children,
  modalWidth,
  content,
  align,
  closable = false,
  padding
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
      <ModalWrapper
        closable={closable}
        title={title}
        centered={true}
        open={visible}
        onOk={onOK}
        okText={okText}
        onCancel={onCancel}
        cancelText={cancelText}
        align={align}
        width={modalWidth}
        padding={padding}>
        {children}
        <p>{content}</p>
      </ModalWrapper>
    </>
  );
};
export default ModalComponent;
