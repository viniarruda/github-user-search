import { MockedProvider } from '@apollo/client/testing';

import Details from '..';

import { renderWithTheme, queriesMocks } from '../../../utils/tests/';

describe('Repo Details Screen', () => {
  // const { getByTestId, getByText } = renderWithTheme(
  //   <MockedProvider mocks={queriesMocks.getUserMock} addTypename={false}>
  //     <Home />
  //   </MockedProvider>
  // );

  const tree = renderWithTheme(
    <MockedProvider
      mocks={[queriesMocks.getRepoDetailsMock]}
      addTypename={false}>
      <Details />
    </MockedProvider>
  );

  describe.only('Details', () => {
    it('test', () => {
      console.log(tree.debug());
    });
  });
});
