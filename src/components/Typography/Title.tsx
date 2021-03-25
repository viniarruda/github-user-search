import styled from 'styled-components';

type TFontWeightTypes = 'bold' | 'normal';

type TTitleProps = {
  fontWeight: TFontWeightTypes;
};

const Title = styled.h1<TTitleProps>`
  font-size: ${({ theme }) => theme.units.spacing.spacing20px};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Title;
