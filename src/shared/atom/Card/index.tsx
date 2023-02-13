import React from 'react';
import { CustomCard } from './style';

interface CardFieldProps {
  title?: React.ReactNode;
  style?: any;
  bordered?: boolean;
  children?: any;
  spacing?: any;
}

const Card = (props: CardFieldProps): JSX.Element => {
  const { title, bordered, style = {}, children, spacing } = props;
  return (
    <CustomCard title={title} style={{ padding: spacing, ...style }} bordered={bordered}>
      {children}
    </CustomCard>
  );
};

export default Card;
