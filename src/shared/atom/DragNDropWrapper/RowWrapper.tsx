import { MenuOutlined } from '@ant-design/icons';
import { Flex } from '@atom/Flex';
import { Col, Row } from 'antd';
import React, { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DragNDropWrapperProps } from './helper';

const RowWrapper: FC<DragNDropWrapperProps> = ({
  index,
  onDropCard,
  moveCard,
  isSide,
  children
}) => {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'box',
    collect(monitor: any) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item: any, monitor: any) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      //@ts-ignore
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard && moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'box',
    canDrag: true,
    item: () => {
      return { index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    }),
    end: (item, monitor) => onDropCard && onDropCard(item, monitor)
  });

  drag(drop(ref));

  return (
    <>
      <Row ref={ref} style={{ marginTop: 20, width: '100%' }}>
        <Row
          gutter={16}
          ref={preview}
          style={{ width: '100%' }}
          // justify="space-between"
          data-handler-id={handlerId}
        >
          <Col lg={1} style={{ justifyItems: 'center', display: 'flex' }} xs={isSide ? 3 : 24}>
            <Flex alignItems="center" justifyContent="left">
              <div style={{ border: '1px solid #c4c4c4', padding: '7px' }}>
                <MenuOutlined />
              </div>
            </Flex>
          </Col>
          <Col lg={23} style={{ fontSize: '18px' }} xs={isSide ? 21 : 24}>
            {children}
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default RowWrapper;
