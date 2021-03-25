import { gql } from '@apollo/client';

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

const GET_REPO_DETAILS = gql`
  query GetRepoDetails {
    viewer {
      repositories(
        orderBy: { field: STARGAZERS, direction: DESC }
        first: 30
        privacy: PUBLIC
      ) {
        totalCount
        nodes {
          stargazerCount
          url
          name
          description
        }
      }
    }
  }
`;

export default {
  GET_USER_INFO,
  GET_REPO_DETAILS,
};
