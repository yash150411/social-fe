import { render, screen } from '@testing-library/react';
import CustomError from '..';

export const customErrorTests = describe('Custom Error Tests', () => {
  it('it should render CustomError component with error', () => {
    render(
      <CustomError
        error={{ name: ['Name is required field'] }}
        showError={true}
        fieldName={'name'}
      />
    );
    expect(screen.getByText('Name is required field')).toBeTruthy();
  });
  it('it should render CustomError component without error', async () => {
    render(
      <CustomError
        error={{ name: ['Name is required field'] }}
        showError={false}
        fieldName={'name'}
      />
    );
    const errorText = await screen.queryByTestId('error');
    expect(errorText).toBeFalsy();
  });
});
