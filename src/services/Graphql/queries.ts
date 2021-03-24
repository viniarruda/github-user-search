import {gql} from '@apollo/client';

const GET_USER_INFO = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      name
      login
      bio
      location
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`;

export default {
  GET_USER_INFO,
};
