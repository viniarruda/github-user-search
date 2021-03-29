/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Home from '..';

import { useStateMock, queriesMocks } from '../../../utils/tests/';

import { theme } from '../../../components';

describe.skip('Home Screen', () => {
  const { getByTestId, getByText } = render(
    <>
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[queriesMocks.getUserMock]} addTypename={false}>
          <Home />
        </MockedProvider>
      </ThemeProvider>
    </>
  );

  describe('when the screen are loading', () => {
    it('should show spinner component', () => {
      const spinner = getByTestId('loading');

      expect(spinner).toBeTruthy();
    });
  });

  describe('when type text in input', () => {
    it('should be change the state', () => {
      const { result } = renderHook(() => useStateMock());

      const input = getByTestId('inputUsername');

      fireEvent.change(input, { target: { value: 'viniarruda' } });

      expect(result.current.inputText).toBe('viniarruda');
      expect(typeof result.current.setInputText).toBe('function');
    });
  });

  describe('when fetch the getUser', () => {
    it('should render the component with data', async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));

      const name = getByText('Vinicius');

      expect(name).toBeInTheDocument();
    });
  });
});
