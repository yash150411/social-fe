import React, { FC } from 'react';

import { Content, TimePickerWrapper } from './style';
import Error from '@atom/Error';
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

interface FormValues {
  name: string;
  id: string;
  error?: any;
  onChange?: (value: any) => void;
  onBlur?: (event: React.ChangeEvent<any>, value: any) => void;
  value?: any;
  defaultValue?: any;
  className?: any;
  placeholder?: any;
  picker?: any;
  format?: string;
  disabled?: boolean;
  disabledTime?: any;
  use12Hours?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  allowClear?: boolean;
}

const PICKER_VIEW_MAP: any = {
  'h:mm': 'h:mm'
};
const TimePickerComponent: FC<FormValues> = ({
  error,
  id,
  name,
  onChange,
  value,
  defaultValue = '',
  className,
  placeholder,
  picker,
  format,
  disabled,
  disabledTime,
  use12Hours = false,
  hourStep,
  minuteStep,
  secondStep,
  allowClear = true
}) => {
  const timeFormat = PICKER_VIEW_MAP[picker] || 'h:mm:ss A';

  return (
    <Content className="" error={error}>
      <TimePickerWrapper>
        <TimePicker
          //@ts-ignore
          getPopupContainer={(trigger) => trigger.parentElement}
          value={value ? moment(value, format) : defaultValue}
          use12Hours={use12Hours}
          allowClear={allowClear}
          id={id}
          onKeyDown={(e: any) => {
            if ((e.key === 'Enter' || e.key === 'Tab') && !!e?.target?.value) {
              // If access key is enter or tab and value is not empty
              if (onChange) {
                // If onChange is present
                if (moment(e?.target?.value, 'hh:mm A').format('HH:mm') === 'Invalid date') {
                  // If value is invalid
                  onChange(value ?? moment(new Date()).format('hh:mm A'));
                } else {
                  // If value is valid
                  onChange(moment(e?.target?.value, 'hh:mm A').format(format || 'HH:mm'));
                }
              }
            }
          }}
          onChange={(e: any) => {
            if (onChange) {
              onChange(e ? moment(e._d).format(format || 'h:mm:ss') : '');
            }
          }}
          placeholder={placeholder ? placeholder : timeFormat}
          format={'hh:mm A'}
          disabled={disabled}
          disabledTime={disabledTime}
          hourStep={hourStep}
          minuteStep={minuteStep}
          secondStep={secondStep}
        />

        <span className="errormsg" style={{ color: 'red' }}>
          {error ? <Error error={error} /> : ''}
        </span>
      </TimePickerWrapper>
    </Content>
  );
};

export default TimePickerComponent;
