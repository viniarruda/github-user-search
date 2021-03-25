import styled from 'styled-components';

type TCardProps = {
  p?: string;
  m?: string;
};

const Card = styled.div<TCardProps>`
  width: 100%;
  border-top: 1px solid #eeeeee;
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  display: flex;
  flex: 1;
  flex-direction: column;

  &:last-child {
    border-bottom: 1px solid #eeeeee;
  }
`;

export default Card;
