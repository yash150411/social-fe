import { render, screen } from '@testing-library/react';
import Accordion from '..';

export const accordinTests = describe('According Tests', () => {
  it('it should render According', async () => {
    const onChangeFn = jest.fn();
    const FirstAccording = () => <div>First According</div>;
    render(
      <Accordion title="First Accordian" onChange={onChangeFn} activeKey={1}>
        <FirstAccording />
      </Accordion>
    );
    expect(screen.getByText('First Accordian')).toBeTruthy();
  });
});
