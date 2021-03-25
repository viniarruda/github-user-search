/* eslint-disable react/display-name */
import { TTypographyProps } from '../../interfaces';

import Title from './Title';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';

const Typography = ({
  variant,
  fontWeight = 'normal',
  children,
  color = 'reverse',
  fontSize = 'spacing14px',
}: TTypographyProps) => {
  console.log('children', children);

  const getVariant = {
    default: (
      <Paragraph color={color} fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </Paragraph>
    ),
    title: (
      <Title color={color} fontWeight={fontWeight}>
        {children}
      </Title>
    ),
    subtitle: (
      <Subtitle color={color} fontWeight={fontWeight}>
        {children}
      </Subtitle>
    ),
    paragraph: (
      <Paragraph color={color} fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </Paragraph>
    ),
  };

  return getVariant[variant] || getVariant.default;
};

export default Typography;
