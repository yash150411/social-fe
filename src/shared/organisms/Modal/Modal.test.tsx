import React from 'react';
import ReactDOM from 'react-dom';
import ModalComponent from './Modal';
import { render, screen } from '@testing-library/react';

describe('Modal componant test cases', () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener() {},
        removeListener() {}
      };
    };
  test('Modal should render properly', async () => {
    const container = render(<ModalComponent title="Hello" />);

    const UserDetails = await screen.queryByText(/Hello/i);

    expect(UserDetails).toHaveTextContent('Hello');
    expect(container).toHaveTextContent('Hello');
  });
});
