export interface IUser {
  name: string;
  avatarUrl: string;
  bio: string;
  followers: {
    totalCount: number;
    __typename: string;
  };
  following: {
    totalCount: number;
    __typename: string;
  };
  location: string;
  login: string;
  starredRepositories: {
    totalCount: number;
    __typename: string;
  };
}

export interface IUserNormalized {
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  login: string;
  starredRepositories: number;
}
