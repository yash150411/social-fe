import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { DragNDropWrapperProps } from './helper';
import RowWrapper from './RowWrapper';

const DragNDropWrapper: FC<DragNDropWrapperProps> = ({
  index,
  onDropCard,
  moveCard,
  isSide,
  children
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <RowWrapper index={index} onDropCard={onDropCard} moveCard={moveCard} isSide={isSide}>
        {children}
      </RowWrapper>
    </DndProvider>
  );
};

export default DragNDropWrapper;
