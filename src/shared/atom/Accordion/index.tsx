import React, { FC } from 'react';
import { Collapse } from 'antd';
import { Wrapper } from './style';

const { Panel } = Collapse;
export interface AccordionProps {
  className?: 'borderedPanel' | 'accordian-error' | '';
  children?: React.ReactNode;
  title?: string;
  subTitle?: React.ReactNode;
  expandIconPosition?: 'left' | 'right';
  ghost?: false | true;
  extra?: '*Required' | '';
  defaultActiveKey?: any | 1;
  accordianKey?: any | 1;
  activeKey?: any | 1;
  onChange?: any;
}
const Accordion: FC<AccordionProps> = ({
  onChange,
  children,
  title,
  subTitle,
  className,
  expandIconPosition,
  activeKey,
  extra,
  defaultActiveKey,
  accordianKey
}) => {
  return (
    <Wrapper>
      <Collapse
        data-testid={'accordain'}
        onChange={onChange}
        ghost={true}
        defaultActiveKey={defaultActiveKey}
        expandIconPosition={expandIconPosition}
        className={className}
        {...(activeKey
          ? {
              activeKey: activeKey
            }
          : {})}
      >
        <Panel
          header={
            <span className="headerContent">
              {title}
              <span className="subtitle">{subTitle}</span>
            </span>
          }
          extra={extra}
          key={accordianKey}
        >
          {children}
        </Panel>
      </Collapse>
    </Wrapper>
  );
};

export default Accordion;
