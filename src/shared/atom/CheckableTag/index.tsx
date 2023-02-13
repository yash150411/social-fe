import { Tag } from 'antd';

import Error from '@atom/Error';

const { CheckableTag } = Tag;

interface CheckableTagProps {
  options: Array<any>;
  selectedTags: Array<any>;
  onChange: (selectedTags: any) => void;
  error: any;
}

function Tags(props: CheckableTagProps) {
  const { options, selectedTags, onChange, error } = props;

  const handleChange = (tag: any, checked: boolean) => {
    const nextSelectedTags = checked
      ? selectedTags?.length
        ? [...selectedTags, tag?.id]
        : [tag?.id]
      : selectedTags?.filter((t) => t !== tag?.id);
    onChange({ updatedList: nextSelectedTags, dataId: tag?.id, isAdded: checked });
  };

  return (
    <div>
      {options?.map((tag: any) => (
        <CheckableTag
          key={tag?.id}
          checked={selectedTags?.indexOf(tag?.id) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag?.name}
        </CheckableTag>
      ))}
      <br />
      <span className="errormsg">{error ? <Error error={error} /> : ' '}</span>
    </div>
  );
}

export default Tags;
