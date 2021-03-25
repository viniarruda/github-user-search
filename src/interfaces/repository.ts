export interface IRepositoryDetails {
  description: string;
  homepageUrl: string;
  name: string;
  stargazerCount: number;
  url: string;
  __typename: string;
}

export interface IRepository {
  repositories: {
    totalCount: number;
    nodes: IRepositoryDetails[];
  };
}
