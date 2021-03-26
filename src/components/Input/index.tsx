import styled from 'styled-components';

import { TTestProps } from '../../interfaces';

const Input = styled.input<TTestProps>`
  border: ${({ theme }) => `2px solid ${theme.colors.reverse}`};
`;

export default Input;
