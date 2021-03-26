import { graphqlService } from '../../services';

const getUserMock = {
  request: {
    query: graphqlService.queries.GET_USER_INFO,
    variables: {
      login: 'viniarruda',
    },
  },
  result: {
    data: {
      user: {
        name: 'Vinicius',
        bio: 'Description of github user',
        login: 'viniarruda',
        avatarUrl: 'image',
        location: 'SP',
        followers: {
          totalCount: 100,
        },
        following: {
          totalCount: 50,
        },
        starredRepositories: {
          totalCount: 550,
        },
      },
    },
  },
};

const getRepoDetailsMock = {
  request: {
    query: graphqlService.queries.GET_REPO_DETAILS,
    variables: {
      field: 'NAME',
      direction: 'ASC',
    },
  },
  result: {
    data: {
      viewer: {
        repositories: {
          totalCount: 50,
          nodes: [
            {
              description: 'Description of repository',
              homepageUrl: 'https://github.com',
              name: 'github-user-search',
              stargazerCount: 30,
              url: 'https://github.com',
              __typename: 'type',
              updatedAt: '2020-05-20',
            },
            {
              description: 'Description of repository 2',
              homepageUrl: 'https://github.com',
              name: 'user-search',
              stargazerCount: 5,
              url: 'https://github.com',
              __typename: 'type',
              updatedAt: '2020-05-10',
            },
          ],
        },
      },
    },
  },
};

export default {
  getUserMock,
  getRepoDetailsMock,
};
