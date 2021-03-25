import styled from 'styled-components';

import { TFlexDirection, TJustifyContent } from '../../interfaces';

type TGridProps = {
  p?: string;
  m?: string;
  flexDirection?: TFlexDirection;
  justifyContent?: TJustifyContent;
  flex?: number;
};

const Grid = styled.div<TGridProps>`
  display: flex;
  ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
`;

export default Grid;
