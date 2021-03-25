import styled from 'styled-components';

import { TColorProps } from '../../interfaces';

type TFontWeightTypes = 'bold' | 'normal';

type TSubtitleProps = {
  fontWeight: TFontWeightTypes;
  color: TColorProps;
};

const Subtitle = styled.h2<TSubtitleProps>`
  font-size: ${({ theme }) => theme.units.spacing.spacing16px};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Subtitle;
