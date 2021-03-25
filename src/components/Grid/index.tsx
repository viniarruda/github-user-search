import styled from 'styled-components';

import { TGridProps } from '../../interfaces';

const Grid = styled.div<TGridProps>`
  display: flex;
  ${(props) => props.flex && { flex: props.flex }};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  align-items: ${(props) => props.justifyContent || 'flex-start'};
  ${(props) => props.maxWidth && { 'max-width': props.maxWidth }};
  ${(props) => props.width && { width: props.width }};
  ${(props) => props.border && { border: props.border }};
  ${(props) => props.borderR && { 'border-right': props.borderR }};
  ${(props) => props.borderL && { 'border-left': props.borderL }};
  ${(props) => props.borderT && { 'border-top': props.borderT }};
  ${(props) => props.borderB && { 'border-bottom': props.borderB }};
`;

export default Grid;
