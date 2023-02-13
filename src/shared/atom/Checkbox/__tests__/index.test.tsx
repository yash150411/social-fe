import { render, screen } from '@testing-library/react';
import { CheckboxProps } from 'antd';
import Checkbox from '..';

export const checkboxTests = describe('Checkbox Tests', () => {
  it('it should render CheckBox', async () => {
    render(<Checkbox checked={true} />);
    const checkbox = screen.getByTestId('checkbox') as CheckboxProps;
    expect(checkbox.checked).toBe(true);
  });
});
