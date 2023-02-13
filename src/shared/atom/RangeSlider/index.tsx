import { Slider } from 'antd';
import React, { ReactNode } from 'react';
import { Wrapper } from './style';

export interface SliderMarks {
  [key: number]:
    | React.ReactNode
    | {
        style: React.CSSProperties;
        label: React.ReactNode;
      };
}
interface SliderProps {
  defaultValue: number | [number, number];
  marks?: SliderMarks;
  max?: any;
  value?: any;
  min?: any;
  onChange?: any;
  step?: any;
}

function RangeSlider(props: any) {
  const { defaultValue, marks, max, min, onChange, value, step } = props;
  return (
    <Wrapper>
      <Slider
        range
        step={step}
        value={value}
        onChange={(value: any) => onChange(value)}
        defaultValue={defaultValue}
        marks={marks}
        max={max}
        min={min}
      />
    </Wrapper>
  );
}

export default RangeSlider;
