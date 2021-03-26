/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ThemeProvider } from 'styled-components';

import { render } from '@testing-library/react';

import { theme } from '../../components';

export const renderWithTheme = (tree: React.ReactElement) => {
  // @ts-ignore
  return render(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
};
