import { ApolloError } from '@apollo/client';

import { IUser } from '../../interfaces';

export interface IQueryState {
  loading: boolean;
  data: IUser;
  error: ApolloError | undefined;
}
