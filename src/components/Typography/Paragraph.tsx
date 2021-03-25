import styled from 'styled-components';

import { TSpacingProps, TColorProps } from '../../interfaces';

type TFontWeightTypes = 'bold' | 'normal';

type TParagraphProps = {
  fontWeight: TFontWeightTypes;
  fontSize: TSpacingProps;
  color: TColorProps;
};

const Paragraph = styled.p<TParagraphProps>`
  font-size: ${({ fontSize, theme }) => theme.units.spacing[fontSize]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Paragraph;
