export interface IRepositoryDetails {
  description: string;
  homepageUrl: string;
  name: string;
  stargazerCount: number;
  url: string;
  __typename: string;
  updatedAt: string;
}

export interface IRepository {
  repositories: {
    totalCount: number;
    nodes: IRepositoryDetails[];
  };
}

export enum DIRECTION_TYPES {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum FIELD_TYPES {
  STARGAZERS = 'STARGAZERS',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

export type TFieldTypes = 'STARGAZERS' | 'NAME' | 'UPDATED_AT';

export type TDirectionTypes = 'DESC' | 'ASC';
