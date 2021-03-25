import { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#69D2E7',
  secondary: '#F38630',
  neutral: '#FFF',
  reverse: '#000',
};

const units = {
  spacing1px: '1px',
  spacing2px: '2px',
  spacing4px: '4px',
  spacing6px: '6px',
  spacing8px: '8px',
  spacing10px: '10px',
  spacing12px: '12px',
  spacing14px: '13px',
  spacing16px: '14px',
  spacing20px: '16px',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    units: {
      spacing: typeof units;
    };
  }
}

const defaultTheme: DefaultTheme = {
  colors,
  units: {
    spacing: units,
  },
};

export default {
  colors,
  units,
  defaultTheme,
};
