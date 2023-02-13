import { InputFormWrapper } from '@atom/Select/style';
import React, { useState } from 'react';
import Error from '@atom/Error';
import { SearchableSelectContainer } from './styles';
import { SearchIcon } from '@assets/index';
import { AutoComplete, Input } from 'antd';

interface SearchableSelectProps {
  onChange?: any;
  onSearch?: any;
  id?: string;
  name?: string;
  value?: any;
  error?: any;
  placeholdertitle?: any;
  defaultValue?: any;
  options: any;
  keyValue: string;
  className?: string;
  allowClear?: boolean;
  labelValue: string;
  onBlur?: (e: any) => void;
  prefix?: boolean;
  disablePrefix?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  listHeight?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function SearchableSelect(props: SearchableSelectProps) {
  const {
    keyValue,
    onSearch,
    onChange,
    labelValue,
    error,
    id,
    options = [],
    allowClear,
    value,
    onBlur,
    onClick,
    className,
    placeholdertitle,
    prefix,
    disablePrefix = false,
    disabled,
    style,
    listHeight = 256
  } = props;
  const [searchedValue, setSearchedValue] = useState<any>(null);

  const customOptions = options.map((i: any) => {
    return { ...i, label: i[labelValue], value: i[keyValue] };
  });
  return (
    <InputFormWrapper className={className} style={style}>
      <SearchableSelectContainer error={error}>
        <AutoComplete
          onClick={onClick}
          disabled={disabled}
          getPopupContainer={(trigger) => trigger.parentElement}
          style={{ width: '100%' }}
          listHeight={listHeight}
          allowClear={allowClear}
          id={id}
          onClear={() => {
            setSearchedValue('');
            onChange(null);
          }}
          value={value && value[labelValue] ? value[labelValue] : searchedValue}
          onSelect={(e: Event) => {
            onChange(customOptions.find((i: any) => i[keyValue] === e));
            setSearchedValue(null);
          }}
          onBlur={(e) => {
            searchedValue &&
              onChange &&
              !(value && value[labelValue]) &&
              onChange({ [keyValue]: -1, [labelValue]: searchedValue.trim() });
          }}
          options={customOptions}>
          <Input
            prefix={prefix && !disablePrefix ? <img src={SearchIcon} alt={'search_icon'} /> : null}
            suffix={!prefix ? <img src={SearchIcon} alt={'search_icon'} /> : null}
            onBlur={onBlur}
            onChange={(event) => {
              const e = event.target.value;
              setSearchedValue(e);
              value && value[labelValue] && onChange && onChange(null);
              onSearch && onSearch(e);
            }}
            size="large"
            placeholder={placeholdertitle}
          />
        </AutoComplete>
      </SearchableSelectContainer>
      <span className="errormsg" style={{ color: 'red' }}>
        {error ? <Error error={error} /> : ''}
      </span>
    </InputFormWrapper>
  );
}

export default SearchableSelect;
