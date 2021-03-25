import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { TColorProps } from '../../interfaces';

type TButtonProps = {
  color: TColorProps;
  textColor: TColorProps;
  fullWidth?: boolean;
  children: string;
};

const Button = styled(Link)<TButtonProps>`
  align-items: center;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme }) => theme.units.spacing.spacing4px};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-size: 12px;
  text-decoration: none;
  text-align: center;
  text-transform: capitalize;
  padding: 20px 40px;
`;

export default Button;
