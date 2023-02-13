import React, { useState, useEffect } from 'react';

import { Table } from 'antd';
import { Wrapper } from './style';

interface DataType {
  key: React.Key;
  image?: typeof Image;
  name?: string;
  branch?: string;
  department?: string;
  role?: string;
}

interface TableComponentProps {
  tableData: any;
  column: any;
  tableSize?: string;
}

const TableComponent: React.FC<TableComponentProps> = ({ tableData, column, tableSize }) => {
  const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
  function onChange(pagination: any, filters: any, sorter: any, extra: any) {}
  useEffect(() => {
    setDataSource(tableData);
  }, [...tableData]);

  const [dataSource, setDataSource] = useState(tableData);
  const [value, setValue] = useState('');
  return (
    <Wrapper tableSize={tableSize}>
      <Table columns={column} dataSource={dataSource} onChange={onChange} pagination={false} />
    </Wrapper>
  );
};
export default TableComponent;
