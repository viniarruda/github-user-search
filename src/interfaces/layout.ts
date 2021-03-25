import { ReactElement } from 'react';

import { theme } from '../components';

export type TFlexDirection = 'row' | 'column';

export type TJustifyContent =
  | 'center'
  | 'flex-start'
  | 'space-between'
  | 'flex-end';

export type TGridProps = {
  p?: string;
  m?: string;
  flexDirection?: TFlexDirection;
  justifyContent?: TJustifyContent;
  flex?: number;
  alignItems?: TJustifyContent;
  maxWidth?: string;
  width?: string;
  height?: string;
  border?: string;
  borderR?: string;
  borderT?: string;
  borderL?: string;
  borderB?: string;
};

export type TColorProps = keyof typeof theme.colors;

export type TSpacingProps = keyof typeof theme.units;

export type TTypographyVariants = 'title' | 'subtitle' | 'paragraph';

export type TTypographyProps = {
  variant: TTypographyVariants;
  fontWeight?: 'bold' | 'normal';
  children: ReactElement | string;
  color?: TColorProps;
  fontSize?: TSpacingProps;
};
