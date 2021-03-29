/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MockedProvider } from '@apollo/client/testing';
import { waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ThemeProvider } from 'styled-components';

import Details from '..';

import { queriesMocks, useStateMock } from '../../../utils/tests/';

import { theme } from '../../../components';

describe('Repo Details Screen', () => {
  const { getByText, getByTestId } = render(
    <>
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <MockedProvider
          mocks={[queriesMocks.getRepoDetails]}
          addTypename={false}>
          <Details />
        </MockedProvider>
      </ThemeProvider>
    </>
  );

  describe('when the fetch as completed', () => {
    it('should render the components', async () => {
      await new Promise((resolve) => setTimeout(resolve));

      expect(getByText('Filters')).toBeInTheDocument();
    });
  });

  describe('when the query is loading', () => {
    const Spinner = getByTestId('loading');

    it('should show spinner component', async () => {
      await waitFor(() => {
        expect(Spinner).toBeInTheDocument();
      });
    });
  });

  describe('when query was completed', () => {
    it('test', async () => {
      const { result } = renderHook(() => useStateMock());

      await new Promise((resolve) => setTimeout(resolve, 0));

      await waitFor(() => {
        expect(result.current.inputText).toBe('DESC');
      });
    });
  });
});
