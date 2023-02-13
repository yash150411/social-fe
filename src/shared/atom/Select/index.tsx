import { CustomInput, InputFormWrapper, InputFormWrapperForMultiCheckBox } from './style';
import React, { FC, useState } from 'react';

import { DropdownIcon } from '@assets/index';
import Error from '@atom/Error';
import { FileSearchOutlined, SearchOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const { Option } = CustomInput;
export interface SelectProps {
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  onSearch?: any;
  options?: any;
  children?: any;
  name?: any;
  id?: string;
  value?: any;
  error?: any;
  placeholdertitle?: any;
  defaultValue?: any;
  mode?: 'multiple' | 'tags' | undefined;
  allowClear?: boolean;
  clearIcon?: any;
  onKeyUp?: any;
  className?: any;
  maxTagTextLength?: number;
  showArrow?: boolean;
  style?: React.CSSProperties;
  filterOption?: any;
  disabled?: boolean;
  onInputKeyDown?: (e: any) => void;
  filterTreeNode?: boolean | ((inputValue: string, treeNode: any) => boolean);
  listHeight?: number;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

const SelectInput: FC<SelectProps> = ({
  onChange,
  onFocus,
  onBlur,
  onSearch,
  options,
  children,
  name,
  error,
  value,
  id,
  placeholdertitle,
  defaultValue,
  mode,
  allowClear,
  clearIcon,
  onKeyUp,
  className,
  showArrow,
  style,
  filterOption,
  disabled = false,
  onInputKeyDown,
  placement = 'bottomLeft',
  listHeight = 256
}) => {
  return (
    <InputFormWrapper style={style} className={className}>
      <CustomInput
        dropdownAlign={{ offset: [0, 4] }}
        mode={mode}
        showSearch={true}
        id={id}
        showArrow={showArrow}
        style={{ width: '100%' }}
        placeholder={placeholdertitle}
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        options={options}
        value={value}
        allowClear={allowClear}
        clearIcon={clearIcon || <span style={{ fontWeight: 900, color: 'black' }}>✖</span>}
        error={error}
        filterOption={filterOption}
        onInputKeyDown={onInputKeyDown}
        disabled={disabled}
        listHeight={listHeight}
        placement={placement}
        //className={`${className} ${error?'errorClass':''}`}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        getPopupContainer={(trigger) => trigger.parentElement}
        defaultValue={defaultValue}>
        {children}
      </CustomInput>

      <span className="errormsg" style={{ color: 'red' }}>
        {error ? <Error error={error} /> : ''}
      </span>
    </InputFormWrapper>
  );
};

export const SelectInputWithCheckBox: FC<SelectProps> = ({
  onChange,
  onFocus,
  onBlur,
  onSearch,
  options,
  children,
  name,
  error,
  value,
  id,
  placeholdertitle,
  defaultValue,
  mode,
  allowClear,
  filterTreeNode,
  onKeyUp,
  className,
  maxTagTextLength,
  disabled
}) => {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <InputFormWrapperForMultiCheckBox error={error}>
      <TreeSelect
        disabled={disabled}
        id={id}
        value={value}
        defaultValue={defaultValue}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        getPopupContainer={(trigger) => trigger.parentElement}
        onChange={onChange}
        onFocus={() => {
          setToggleIcon(!toggleIcon);
        }}
        onBlur={(e: any) => {
          setToggleIcon(false);
          onBlur && onBlur(e);
        }}
        showCheckedStrategy={SHOW_PARENT}
        placeholder={placeholdertitle}
        treeData={options}
        treeCheckable={true}
        multiple
        treeDefaultExpandAll
        showArrow={true}
        treeNodeFilterProp="title"
        showSearch={true}
        allowClear={allowClear}
        filterTreeNode={filterTreeNode}
        //className={`${className} ${error?'errorClass':''}`}
        //@ts-ignore
        suffixIcon={() =>
          //@ts-ignore
          toggleIcon ? <SearchOutlined /> : <img alt="" src={FileSearchOutlined} />
        }
        style={{ width: '100%' }}
      />
      <span className="errormsg" style={{ color: 'red' }}>
        {error ? <Error error={error} /> : ''}
      </span>
    </InputFormWrapperForMultiCheckBox>
  );
};

export default SelectInput;
