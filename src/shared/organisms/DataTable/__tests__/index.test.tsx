import { render, screen } from '@testing-library/react';
import StoreProvider from '@utils/testUtils/StoreProvider';
import DataTable from '../DataTable';

export const dataTableTests = describe('DataTable Tests', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => {
        return {
          matches: true,
          addListener: jest.fn(),
          removeListener: jest.fn()
        };
      }
    });
  });

  it('it should render DataTable', async () => {
    const data = [
      {
        name: 'Test 1',
        id: 1
      },
      {
        name: 'Test 2',
        id: 2
      },
      {
        name: 'Test 2',
        id: 3
      }
    ];
    const cols = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '40%',
        render: (data: any) => <div data-testid={'name'}>{data}</div>
      }
    ];

    const container = render(
      <StoreProvider>
        <DataTable dataSource={data} columns={cols} />
      </StoreProvider>
    );

    const tableColElements = screen.getAllByText(
      (content, element: any) => element.tagName.toLowerCase() === 'td'
    );
    const tableRowElements = screen.getAllByText(
      (content, element: any) => element.tagName.toLowerCase() === 'tr'
    );

    expect(tableColElements.length).toBe(4);
    expect(tableRowElements.length).toBe(5);
  });
});
