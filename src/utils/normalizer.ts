/* eslint-disable @typescript-eslint/ban-ts-comment */
import {IUser, IUserNormalized} from '../interfaces';

type SubObject = {
  totalCount: number;
  __typename: string;
};

const getTotalCount = (object: SubObject) => object.totalCount;

const normalizeUserData = (user: IUser) => {
  const {
    avatarUrl,
    bio,
    followers,
    following,
    location,
    login,
    name,
    starredRepositories,
  } = user;

  const normalizedData: IUserNormalized = {
    avatarUrl,
    bio,
    location,
    login,
    name,
    followers: getTotalCount(followers),
    following: getTotalCount(following),
    starredRepositories: getTotalCount(starredRepositories),
  };

  console.log('user normalized', normalizedData);

  return normalizedData;
};

export {normalizeUserData};
