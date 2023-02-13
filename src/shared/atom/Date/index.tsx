import React from 'react';
import moment from 'moment';
import '@constant/color/Color.css';
interface DateProps {
  date: string;
  isDisabled?: boolean;
  format?: string;
}
function Date(props: DateProps) {
  const { date, isDisabled, format } = props;
  return (
    <div
      style={{
        fontSize: 14,
        fontWeight: 400,
        color: isDisabled ? 'var(--color-system-gray-gray-13)' : 'var(--color-system-gray-gray-15)'
      }}
    >
      {moment(date)
        .format(format || 'MMM. DD, YYYY LT')
        .concat(' EST')}
    </div>
  );
}

export default Date;
