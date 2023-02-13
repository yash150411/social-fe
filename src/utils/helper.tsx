import Checkbox from '@atom/Checkbox';
import { Select } from 'antd';
import moment from 'moment';

export const getSelectOptions = (
  list: Array<any>,
  valueKey: string,
  checkbox?: boolean,
  selectedValues?: Array<string>
) => {
  return list?.map((item: any) => {
    return (
      <Select.Option value={item?.id} key={item?.id}>
        {checkbox ? (
          <span className="selectRowWithCheckbox">
            {checkbox && (
              <Checkbox checked={selectedValues && selectedValues?.includes(item?.id)} />
            )}
            {item?.[valueKey]}
          </span>
        ) : (
          `${item?.[valueKey]}`
        )}
      </Select.Option>
    );
  });
};

export const getEventDate = (date: any) => {
  return date && date !== '0000-00-00' ? moment(date).format('ddd, MMMM DD') : 'Unassigned Date';
};

export const getImageDimensions = (src: any) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = src;
  });
};
