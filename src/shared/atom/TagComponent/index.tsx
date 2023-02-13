import React, { useEffect, useState } from 'react';

import Error from '@atom/Error';
import { Flex } from '@atom/Flex';
import { TagWrapper } from './style';
import { Tooltip } from 'antd';

interface ITagComponentProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  values: any;
  id: string;
  placeholder?: string;
  limit?: number;
  error?: any;
  isTooltip?: boolean;
  toolTipText?: any;
  toolTipIcon?: any;
  toolTipPlacement?: any;
}

const TagComponent: React.FC<ITagComponentProps> = ({
  setFieldValue,
  values = [],
  id = '',
  placeholder = 'Enter Tag seperated by a comma',
  limit = null,
  error = '',
  isTooltip = false,
  toolTipText,
  toolTipIcon,
  toolTipPlacement = 'bottomRight'
}) => {
  const [tags, setTags] = useState(values);
  const [input, setInput] = useState('');
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  useEffect(() => {
    setTags(values?.length > 0 ? values?.map((item: any, idx: number) => item) : []);
  }, [JSON.stringify(values)]);

  // useEffect(() => {
  // setFieldValue(id, tags);
  // }, [tags]);

  const onChange = (e: any) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e: any) => {
    const { key } = e;
    const trimmedInput = input.trim();
    //@ts-ignore
    if ((key === ',' || key === 'Enter') && trimmedInput.length && !tags?.includes(trimmedInput)) {
      e.preventDefault();
      //@ts-ignore
      setTags((prevState) => [...prevState, trimmedInput]);
      setFieldValue(id, [...tags, trimmedInput]);
      setInput('');
    }

    if (key === 'Backspace' && !input.length && tags.length && isKeyReleased) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      //@ts-ignore
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  const deleteTag1 = (index: any) => {
    setTags((prevState: any) => prevState?.filter((tag: any, i: number) => i !== index));
    setFieldValue(
      id,
      tags?.filter((tag: any, i: number) => i !== index)
    );
  };

  return (
    <TagWrapper>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {tags?.map((tag: any, index: number) => (
          <div className="tag" key={index}>
            {tag}
            <button onClick={() => deleteTag1(index)}>x</button>
          </div>
        ))}
        <input
          id={id}
          style={{ width: '100%' }}
          value={input}
          placeholder={!tags?.length ? placeholder : ''}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onChange={onChange}
          disabled={limit ? limit === tags.length : false}
          className={` ${error ? 'errorClass' : ''}`}
        />
        {isTooltip && (
          <Tooltip placement={toolTipPlacement} title={toolTipText}>
            <img
              src={toolTipIcon}
              alt="tooltip"
              style={{ position: 'absolute', top: '12px', right: '10px' }}
            />
          </Tooltip>
        )}
      </div>
      <span
        className="errormsg"
        style={{
          display: 'flex'
        }}
      >
        <Flex flex={1}>{error ? <Error error={error} /> : ''}</Flex>
      </span>
    </TagWrapper>
  );
};

export default TagComponent;
