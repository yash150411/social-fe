import { DatePicker } from 'antd';
import Error from '@atom/Error';
import moment from 'moment';
import React, { FC } from 'react';
import { Content } from './style';

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
  disabledDate?: any;
  allowClear?: boolean;
}

const PICKER_VIEW_MAP: any = {
  year: 'YYYY'
};
const DatePickerComponent: FC<FormValues> = ({
  error,
  id,
  name,
  onChange,
  value,
  defaultValue,
  className,
  placeholder,
  picker,
  format,
  disabled,
  disabledDate,
  allowClear = true
}) => {
  const dateFormat = PICKER_VIEW_MAP[picker] || 'DD/MM/YYYY';
  const formatedValue =
    value && value !== 'Invalid date'
      ? moment(moment(value, format || 'YYYY-MM-DD').format(dateFormat), dateFormat)
      : null;

  const options = formatedValue
    ? {
        value: formatedValue
      }
    : {};
  return (
    <Content className="bottom-0" error={error}>
      <DatePicker
        id={id}
        onChange={(e: any) => {
          if (onChange) {
            onChange(e ? moment(e._d).format(format || 'YYYY-MM-DD') : '');
          }
        }}
        defaultValue={defaultValue ? defaultValue : undefined}
        placeholder={placeholder ? placeholder : dateFormat}
        {...options}
        format={format || dateFormat}
        picker={picker}
        disabled={disabled}
        disabledDate={disabledDate}
        allowClear={allowClear}
      />

      <span className="errormsg" style={{ color: 'red' }}>
        {error ? <Error error={error} /> : ''}
      </span>
    </Content>
  );
};

export default DatePickerComponent;
