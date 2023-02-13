import React, { FC } from 'react';
import { Radio } from 'antd';
import { PillRadioWrapper } from './style';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Error from '@atom/Error';

export interface Props {
  onChange: any;
  value: number;
  optionList: any;
  error?: any;
}

const PillRadioGroup: FC<Props> = ({ optionList, value, onChange, error }) => {
  return (
    <PillRadioWrapper>
      <Radio.Group onChange={onChange} value={value} buttonStyle="solid">
        {optionList &&
          optionList.length &&
          optionList.map((i: any) => {
            return (
              <Radio.Button className="chip-style" value={i.value}>
                {i.title}
                {value === i.value ? (
                  <CheckOutlined className="font-style" />
                ) : (
                  <CloseOutlined className="font-style" />
                )}
              </Radio.Button>
            );
          })}
      </Radio.Group>
      <span>{error ? <Error error={error} /> : ''}</span>
    </PillRadioWrapper>
  );
};

export default PillRadioGroup;
