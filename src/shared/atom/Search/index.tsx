import React from 'react';
import { FormInput, SearchbarWrapper, SearchbarWrapperOutline } from './style';

interface SearchFieldProps {
  type?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  onChange?: any;
  style?: any;
  onEnter?: any;
  value?: any;
  defaultValue?: any;
  name?: string;
}

export const SearchBar = (props: SearchFieldProps): JSX.Element => {
  const { type, id, className, placeholder, onChange, name } = props;
  return (
    <SearchbarWrapper className={className}>
      <FormInput
        name={name}
        placeholder={placeholder}
        type={type}
        id={id}
        className={className}
        onChange={onChange}
      />
    </SearchbarWrapper>
  );
};

export const SearchBarOuline = (props: SearchFieldProps): JSX.Element => {
  const { type, id, className, placeholder, onChange, style, onEnter, value, defaultValue } = props;
  return (
    <SearchbarWrapperOutline style={style}>
      <FormInput
        placeholder={placeholder}
        type={type}
        onPressEnter={onEnter}
        id={id}
        className={className}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
      />
    </SearchbarWrapperOutline>
  );
};
