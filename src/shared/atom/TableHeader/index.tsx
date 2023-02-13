import { SearchIcon } from '@assets/index';
import { Button } from '@atom/Buttons';
import DatePickerComponent from '@atom/DatePicker';
import { Flex } from '@atom/Flex';
import { Input } from '@atom/Input';
import SearchableSelect from '@atom/SearchableSelect';
import SelectInput from '@atom/Select';
import TimePickerComponent from '@atom/TimePicker';
import { Select } from 'antd';
import React, { ChangeEvent, FC } from 'react';
const { Option } = Select;

interface TableHeaderProps {
  columnTitle: any;
  name: string;
  value: string | undefined;
  placeholder: string;
  onChange: (a: ChangeEvent, fieldName?: string) => void;
  id?: string;
  keyValue?: string;
  labelValue?: string;
  onSearch?: any;
  isSelect?: boolean;
  options?: any;
  allowClear?: boolean;
  isDate?: boolean;
  isTime?: boolean;
  isSearchable?: boolean;
  style?: any;
  isDisabled?: boolean;
  onClear?: (data: any) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  clearButton?: boolean;
  listHeight?: number;
  className?: any;
}

const TableHeader: FC<TableHeaderProps> = ({
  columnTitle = '',
  name = '',
  value,
  id = '',
  keyValue = '',
  labelValue = '',
  placeholder = '',
  onChange,
  onSearch,
  isSelect = false,
  options = [],
  isDate = false,
  isTime = false,
  isSearchable = false,
  allowClear = false,
  style,
  isDisabled,
  clearButton = false,
  listHeight = 256,
  onClear,
  className,
  onClick
}) => {
  return (
    <div style={style}>
      <Flex justifyContent="space-between" alignItems="center">
        <p>{columnTitle}</p>
        {(isDate || isTime || clearButton) && value ? (
          <Button
            text={<p>Clear</p>}
            variant="ghost"
            className={'clear-button'}
            style={{ padding: '0px', fontWeight: '600', color: '#FD7E14' }}
            onClick={() => onClear && onClear({ id: name, value: undefined })}
          />
        ) : null}
      </Flex>
      {isSelect ? (
        <SelectInput
          allowClear={allowClear}
          id={name}
          name={name}
          value={value}
          placeholdertitle={placeholder}
          disabled={isDisabled}
          listHeight={listHeight}
          onChange={(e: any) => onChange(e, name)}>
          {options.map((item: any) => {
            return (
              <Option value={item?.id} key={item?.id}>
                <>{item?.title || item?.name}</>
              </Option>
            );
          })}
        </SelectInput>
      ) : isDate ? (
        <DatePickerComponent
          allowClear={allowClear}
          id={'date_picker'}
          value={value}
          name={'date_picker'}
          disabled={isDisabled}
          onChange={(e: any) => onChange(e)}
        />
      ) : isTime ? (
        <TimePickerComponent
          id={'event_time'}
          name={'event_time'}
          use12Hours={true}
          placeholder={'HH:MM'}
          format={'h:mm A'}
          allowClear={allowClear}
          disabled={isDisabled}
          onChange={(e: any) => onChange(e)}
          value={value}
        />
      ) : isSearchable ? (
        <SearchableSelect
          id="name"
          name="name"
          keyValue={'id'}
          options={options}
          placeholdertitle={placeholder}
          onClick={onClick}
          onChange={(e: any) => onChange(e)}
          onSearch={(e: any) => onSearch(e)}
          prefix={true}
          labelValue={'name'}
          value={value}
          listHeight={listHeight}
        />
      ) : (
        <Input
          id={name}
          name={name}
          value={value}
          disabled={isDisabled}
          placeholder={placeholder}
          prefix={<img src={SearchIcon} />}
          onChange={(e: any) => onChange(e)}
        />
      )}
    </div>
  );
};

export default TableHeader;
