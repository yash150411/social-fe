export interface DragNDropWrapperProps {
  index: number;
  onDropCard?: (item: any, monitor: any) => void;
  moveCard?: (dragIndex: number, hoverIndex: number) => void;
  isSide?: boolean;
  children: React.ReactNode;
}
