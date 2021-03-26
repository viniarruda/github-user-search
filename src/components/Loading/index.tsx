import styled from 'styled-components';

type TSpinner = {
  loading: boolean;
  testID?: string;
};

export const Spinner = styled.div`
  border: 6px solid #f7a940;
  border-top: 6px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
  position: relative;
  top: 400px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = ({ loading }: TSpinner) =>
  loading ? <Spinner /> : null;

export default LoadingSpinner;
