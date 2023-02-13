import React from 'react';
import ReactDOM from 'react-dom';
import TableComponent from '.';

const columns = [
  {
    title: 'Module name',
    dataIndex: 'moduleName',
    key: 'Module name',
    width: '400px'
  },
  {
    title: 'View',
    dataIndex: 'View',
    key: 'View'
  }
];

const tableData = [
  {
    key: 0,
    moduleName: 'Module name',
    View: 'test'
  },
  {
    key: 1,
    moduleName: 'Module name',
    View: 'test'
  },
  {
    key: 2,
    moduleName: 'Module name',
    View: 'test'
  }
];

describe('Table componant test cases', () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener() {},
        removeListener() {}
      };
    };
  test('table renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TableComponent tableData={tableData} column={columns} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
